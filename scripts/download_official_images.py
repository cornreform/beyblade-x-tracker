#!/usr/bin/env python3
"""Download official Takara Tomy Beyblade X product images."""

import os
import json
import subprocess
import urllib.request
import urllib.error
from pathlib import Path

# Config
DB_PATH = "/home/sunnycsl/beyblade-x-tracker/global_beyblade_db.json"
TOP_DIR = "/home/sunnycsl/beyblade-x-tracker/parts/top"
IMAGE_BASE_URL = "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/{}_list.png"

def code_to_image_url(code):
    """Convert code like 'BX-01' to URL code 'BX01'."""
    return code.replace("-", "").upper()

def code_to_filename(code):
    """Convert code like 'BX-01' to filename 'BX-01.png'."""
    return f"{code}.png"

def process_image(src_path, dst_path):
    """Process image: mogrify + pngquant. Returns (success, error)."""
    temp_file = f"/tmp/official_img_{os.getpid()}_{os.path.basename(src_path)}.png"
    try:
        # mogrify - resize, trim, convert to png
        cmd1 = [
            'mogrify',
            '-format', 'png',
            '-resize', '500x>',
            '-fuzz', '5%',
            '-trim',
            '-write', temp_file,
            src_path
        ]
        result = subprocess.run(cmd1, capture_output=True, text=True, timeout=30)
        if result.returncode != 0:
            return False, f"mogrify: {result.stderr[:100]}"
        
        if not os.path.exists(temp_file):
            return False, "temp file not created"
        
        # pngquant - compress
        cmd2 = [
            'pngquant',
            '--quality=65-80',
            '--output', dst_path,
            '--force',
            temp_file
        ]
        result = subprocess.run(cmd2, capture_output=True, text=True, timeout=30)
        if result.returncode != 0:
            return False, f"pngquant: {result.stderr[:100]}"
        
        return True, None
    except subprocess.TimeoutExpired:
        return False, "timeout"
    finally:
        if os.path.exists(temp_file):
            os.remove(temp_file)

def download_image(url, dest_path):
    """Download image from URL to dest path. Returns (success, error)."""
    import shutil
    try:
        # Create temp file for download in same directory as destination
        temp_file = f"/tmp/download_{os.getpid()}_{os.path.basename(dest_path)}"
        
        # Add User-Agent to avoid blocking
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (compatible; BeybladeTracker/1.0)'
        })
        
        with urllib.request.urlopen(req, timeout=30) as response:
            with open(temp_file, 'wb') as f:
                f.write(response.read())
        
        # Copy to destination (copy instead of rename to avoid cross-device issues)
        shutil.copy2(temp_file, dest_path)
        
        # Clean up temp
        os.remove(temp_file)
        return True, None
    except urllib.error.HTTPError as e:
        return False, f"HTTP {e.code}"
    except urllib.error.URLError as e:
        return False, f"URL error: {e.reason}"
    except Exception as e:
        return False, str(e)
    finally:
        # Clean up temp file if it exists
        temp_file = f"/tmp/download_{os.getpid()}_{os.path.basename(dest_path)}"
        if os.path.exists(temp_file):
            os.remove(temp_file)

def main():
    # Load database
    with open(DB_PATH, 'r', encoding='utf-8') as f:
        db = json.load(f)
    
    tops = db.get('tops', [])
    print(f"Found {len(tops)} top entries in database")
    
    # Get existing top image files
    existing_files = set(f for f in os.listdir(TOP_DIR) if f.endswith('.png'))
    print(f"Found {len(existing_files)} existing top images in {TOP_DIR}")
    
    # Track results
    results = {
        'success': [],
        'failed': [],
        'skipped': []  # No code or no URL available
    }
    
    # Size tracking
    size_before = 0
    size_after = 0
    
    # Process each top entry
    for i, top in enumerate(tops, 1):
        code = top.get('code')
        if not code:
            results['skipped'].append(f"(no code: {top.get('name_en', 'unknown')})")
            continue
        
        # Determine image filename
        filename = code_to_filename(code)
        dest_path = os.path.join(TOP_DIR, filename)
        
        # Check if this is a top variant (like BX-27-01, UX-16-01)
        # These typically won't have official images - skip
        if '-' in code and code.split('-')[1].isdigit() == False:
            # It's a variant like BX-27-01, skip for now
            # Check if the base image exists, if so we'll handle it
            base_code = code.split('-')[0]
            base_file = code_to_filename(base_code)
            if base_file in existing_files or os.path.exists(os.path.join(TOP_DIR, base_file)):
                results['skipped'].append(f"{code} (variant - no official image)")
                continue
            else:
                # Might be a variant that has image - try download anyway
                pass
        
        # Build URL
        url_code = code_to_image_url(code)
        url = IMAGE_BASE_URL.format(url_code)
        
        print(f"[{i}/{len(tops)}] {code} -> {url_code}... ", end="", flush=True)
        
        # Check existing file size for before
        if os.path.exists(dest_path):
            size_before += os.path.getsize(dest_path)
        
        # Download
        success, error = download_image(url, dest_path)
        
        if not success:
            print(f"DL FAILED ({error})")
            results['failed'].append(f"{code} ({error})")
            continue
        
        # Process image
        success, error = process_image(dest_path, dest_path)
        
        if not success:
            # Remove corrupted file
            if os.path.exists(dest_path):
                os.remove(dest_path)
            print(f"PROCESS FAILED ({error})")
            results['failed'].append(f"{code} (process: {error})")
            continue
        
        # Get new size
        new_size = os.path.getsize(dest_path)
        size_after += new_size
        results['success'].append(code)
        print(f"OK ({new_size:,}B)")
    
    # Summary
    print("\n" + "=" * 50)
    print("DOWNLOAD COMPLETE")
    print("=" * 50)
    
    print(f"\nSuccess: {len(results['success'])} images")
    print(f"Failed: {len(results['failed'])} images")
    print(f"Skipped: {len(results['skipped'])} entries")
    
    if size_before > 0:
        saved = size_before - size_after
        pct = (saved * 100 / size_before) if size_before > 0 else 0
        print(f"\nSize: {size_before:,}B -> {size_after:,}B (saved {saved:,}B, {pct:.1f}%)")
    
    if results['failed']:
        print(f"\nFAILED CODES:")
        for f in results['failed']:
            print(f"  - {f}")
    
    if results['skipped']:
        print(f"\nSKIPPED (no code/URL):")
        for s in results['skipped']:
            print(f"  - {s}")
    
    return len(results['failed']) == 0

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)