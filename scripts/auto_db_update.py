#!/usr/bin/env python3
"""
Beyblade X Auto DB Update Script
==================================
Safely modify the GLOBAL_DB embedded in js/app.js.
Usage:
  # Add a new product (pass JSON via stdin or --add flag)
  echo '{"code":"CX-18","name_en":"...","lock":"...","axis":"F","type":"攻擊型"}' | python3 auto_db_update.py --add

  # Update tier rating for a product
  python3 auto_db_update.py --update-tier BX-01 T1

  # Update champion combos (via stdin JSON)
  python3 auto_db_update.py --update-combos < combos.json

  # Dry run (show what would change without writing)
  python3 auto_db_update.py --add ... --dry-run

Environment: TRAKER_DIR, defaults to /home/sunnycsl/beyblade-x-tracker
"""

import json
import os
import re
import sys
import subprocess
from datetime import datetime

TRACKER_DIR = os.environ.get('TRACKER_DIR', '/home/sunnycsl/beyblade-x-tracker')
APP_JS = os.path.join(TRACKER_DIR, 'js', 'app.js')

# Required fields for a top entry + their defaults
TOP_REQUIRED = ['code']
TOP_FIELDS = {
    'code': '', 'name_en': '', 'name_jp': '', 'name_hk': '',
    'lock': '', 'axis': '', 'axis_type': '', 'spin': '右',
    'type': '', 'tier': 'T3', 'meta': '', 'release': '',
    'price': 0, 'image': '',
}


def extract_block(content, var_name):
    """Extract JSON object for a given var declaration from JS content.
    Returns (parsed_json, start_index, end_index) or raises ValueError."""
    pattern = rf'var {var_name}\s*=\s*'
    match = re.search(pattern, content)
    if not match:
        raise ValueError(f"Could not find 'var {var_name} =' in app.js")
    
    # Start parsing after "var NAME = "
    start = match.end()
    
    # Find the first '{' 
    brace_start = content.index('{', start)
    if brace_start == -1:
        raise ValueError(f"No JSON object found for {var_name}")
    
    # Count brace depth to find matching closing brace
    depth = 0
    in_string = False
    escape = False
    json_start = brace_start
    
    for i in range(json_start, len(content)):
        c = content[i]
        if escape:
            escape = False
            continue
        if c == '\\' and in_string:
            escape = True
            continue
        if c == '"' and not escape:
            in_string = not in_string
            continue
        if not in_string:
            if c == '{':
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    json_raw = content[json_start:i+1]
                    try:
                        parsed = json.loads(json_raw)
                    except json.JSONDecodeError as e:
                        raise ValueError(f"JSON decode error at pos {e.pos}: {e}")
                    return parsed, json_start, i + 1
    
    raise ValueError(f"Could not find closing brace for {var_name}")


def read_app_js():
    """Read app.js and return content."""
    if not os.path.exists(APP_JS):
        raise FileNotFoundError(f"app.js not found at {APP_JS}")
    with open(APP_JS, 'r', encoding='utf-8') as f:
        return f.read()


def write_app_js(content, original_path=None):
    """Write content back to app.js."""
    path = original_path or APP_JS
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    return True


def find_top_by_code(db, code):
    """Find a top entry by its code (e.g., 'BX-01', 'CX-18')."""
    for i, top in enumerate(db.get('tops', [])):
        if top.get('code') == code:
            return i, top
    return None, None


def make_top_entry(data):
    """Create a standardized top entry with all fields."""
    entry = {}
    for key, default in TOP_FIELDS.items():
        entry[key] = data.get(key, default)
    # Generate image path if not provided
    if not entry['image'] and entry['code']:
        code_lower = entry['code'].lower()
        entry['image'] = f"parts/top_{code_lower}.png"
    # Ensure required fields
    if not entry['code']:
        raise ValueError("Product code is required")
    return entry


def add_tops(db, new_entries, dry_run=False):
    """Add one or more new tops to the database. Returns list of added codes."""
    existing_codes = {t.get('code') for t in db.get('tops', [])}
    added = []
    
    for entry in new_entries:
        code = entry.get('code', '')
        if not code:
            continue
        if code in existing_codes:
            print(f"  ⏩ {code}: already exists, skipped")
            continue
        
        top = make_top_entry(entry)
        db['tops'].append(top)
        existing_codes.add(code)
        added.append(code)
        print(f"  ✅ {code}: added ({top.get('name_en', '?')})")
    
    return added


def update_tier(db, code, new_tier, dry_run=False):
    """Update tier rating for a product."""
    VALID_TIERS = {'T0', 'T1', 'T2', 'T3'}
    if new_tier not in VALID_TIERS:
        print(f"  ❌ Invalid tier: {new_tier}. Must be one of {VALID_TIERS}")
        return False
    
    idx, top = find_top_by_code(db, code)
    if idx is None:
        print(f"  ❌ {code}: not found in database")
        return False
    
    old_tier = top.get('tier', '?')
    if old_tier == new_tier:
        print(f"  ⏩ {code}: tier already {new_tier}, unchanged")
        return False
    
    if not dry_run:
        db['tops'][idx]['tier'] = new_tier
    print(f"  ✅ {code}: tier {old_tier} → {new_tier}")
    return True


def update_version(db):
    """Update version metadata."""
    today = datetime.now().strftime('%Y-%m-%d')
    db['updated'] = today


def inject_back(content, parsed_obj, start, end):
    """Replace the JSON portion in content with updated version."""
    new_json = json.dumps(parsed_obj, ensure_ascii=False, separators=(',', ':'))
    return content[:start] + new_json + content[end:]


def git_commit_push(message):
    """Commit and push changes to GitHub."""
    os.chdir(TRACKER_DIR)
    
    # Check if there are changes
    result = subprocess.run(
        ['git', 'status', '--short', '--', 'js/app.js'],
        capture_output=True, text=True, timeout=10
    )
    if not result.stdout.strip():
        print("  ⏩ No changes to commit")
        return False
    
    # Add and commit
    subprocess.run(['git', 'add', 'js/app.js'], capture_output=True, timeout=10)
    commit = subprocess.run(
        ['git', 'commit', '-m', message],
        capture_output=True, text=True, timeout=10
    )
    if commit.returncode != 0:
        print(f"  ⚠️  Commit failed: {commit.stderr.strip()[:200]}")
        return False
    
    # Push
    push = subprocess.run(
        ['git', 'push', 'origin', 'main'],
        capture_output=True, text=True, timeout=30
    )
    if push.returncode != 0:
        print(f"  ⚠️  Push failed: {push.stderr.strip()[:200]}")
        return False
    
    print(f"  ✅ Pushed to GitHub: {message}")
    return True


def main():
    import argparse
    parser = argparse.ArgumentParser(description='Auto-update Beyblade X GLOBAL_DB')
    parser.add_argument('--add', nargs='*', help='Add new product(s): pass JSON inline or read from stdin')
    parser.add_argument('--update-tier', nargs=2, metavar=('CODE', 'TIER'),
                        help='Update tier rating: e.g. BX-01 T1')
    parser.add_argument('--dry-run', action='store_true', help='Show what would change without writing')
    parser.add_argument('--skip-push', action='store_true', help='Update app.js but skip git push')
    parser.add_argument('--commit-msg', default='auto: daily DB update',
                        help='Custom commit message')
    
    args = parser.parse_args()
    
    # Read stdin JSON if no --add args provided and stdin has data
    add_entries = []
    if args.add is not None:
        if len(args.add) == 0:
            # Read from stdin
            stdin_data = sys.stdin.read().strip()
            if stdin_data:
                try:
                    entry = json.loads(stdin_data)
                    if isinstance(entry, list):
                        add_entries = entry
                    else:
                        add_entries = [entry]
                except json.JSONDecodeError as e:
                    print(f"❌ Invalid JSON from stdin: {e}")
                    return 1
        else:
            # Parse inline JSON args
            inline = ' '.join(args.add)
            try:
                entry = json.loads(inline)
                if isinstance(entry, list):
                    add_entries = entry
                else:
                    add_entries = [entry]
            except json.JSONDecodeError as e:
                print(f"❌ Invalid JSON from --add: {e}")
                return 1
    
    # Validate inputs
    has_work = bool(add_entries) or (args.update_tier is not None)
    if not has_work and args.add is not None:
        print("No new entries provided and stdin is empty.")
        parser.print_help()
        return 1
    if not has_work:
        parser.print_help()
        return 1
    
    print(f"🔧 Beyblade X Auto DB Update")
    print(f"   Tracker: {TRACKER_DIR}")
    print(f"   App.js:  {APP_JS}")
    if args.dry_run:
        print(f"   Mode:    🔍 DRY RUN (no changes written)")
    print()
    
    # Read and parse app.js
    try:
        content = read_app_js()
    except FileNotFoundError as e:
        print(f"❌ {e}")
        return 1
    
    try:
        db, start, end = extract_block(content, 'GLOBAL_DB')
    except ValueError as e:
        print(f"❌ Failed to parse GLOBAL_DB: {e}")
        return 1
    
    print(f"📦 Current DB: {len(db.get('tops', []))} tops, updated {db.get('updated', '?')}")
    print()
    
    changes_made = False
    added = []
    
    # 1. Add new products
    if add_entries:
        print("📝 Adding new products:")
        added = add_tops(db, add_entries, dry_run=args.dry_run)
        if added:
            changes_made = True
            print()
    
    # 2. Update tier
    if args.update_tier:
        code, tier = args.update_tier
        print(f"📊 Updating tier:")
        if update_tier(db, code, tier, dry_run=args.dry_run):
            changes_made = True
        print()
    
    # 3. Update version
    if changes_made and not args.dry_run:
        update_version(db)
        print(f"📅 Updated version date to {db['updated']}")
    
    # 4. Write back
    if changes_made and not args.dry_run:
        new_content = inject_back(content, db, start, end)
        try:
            write_app_js(new_content)
            print(f"\n✅ app.js updated successfully")
        except Exception as e:
            print(f"\n❌ Failed to write app.js: {e}")
            return 1
        
        # 5. Git commit + push
        if not args.skip_push:
            print()
            print("📤 Pushing to GitHub:")
            git_commit_push(args.commit_msg)
    if args.dry_run and changes_made:
        details = []
        if added:
            details.append(f"{len(added)} additions")
        if args.update_tier is not None:
            details.append("tier update")
        print(f"\n🔍 DRY RUN: {', '.join(details)} would be written")
    else:
        print("✅ No changes needed")
    
    return 0


if __name__ == '__main__':
    sys.exit(main())
