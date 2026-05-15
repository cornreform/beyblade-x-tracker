#!/usr/bin/env python3
"""Process Beyblade X Bit and Top images with rename and optimization."""

import os
import subprocess
import sys
import glob
import re
from pathlib import Path

def process_image(src_path, dst_path, img_type):
    """Process single image: mogrify + pngquant."""
    temp_file = f"/tmp/image_process_{os.getpid()}_{os.path.basename(src_path)}.png"
    
    try:
        # Step 1: mogrify - resize, trim, convert to png
        cmd1 = [
            'mogrify',
            '-format', 'png',
            '-resize', '500x>',
            '-fuzz', '5%',
            '-trim',
            '-write', temp_file,
            src_path
        ]
        result = subprocess.run(cmd1, capture_output=True, text=True)
        if result.returncode != 0:
            return False, f"mogrify error: {result.stderr}"
        
        if not os.path.exists(temp_file):
            return False, "temp file not created"
        
        # Step 2: pngquant - compress
        cmd2 = [
            'pngquant',
            '--quality=65-80',
            '--output', dst_path,
            '--force',
            temp_file
        ]
        result = subprocess.run(cmd2, capture_output=True, text=True)
        if result.returncode != 0:
            return False, f"pngquant error: {result.stderr}"
        
        return True, None
    finally:
        if os.path.exists(temp_file):
            os.remove(temp_file)

def process_batch(source_glob, dest_dir, prefix_pattern, rename_func):
    """Process a batch of images."""
    # Handle both png and jpg sources
    sources = []
    for ext in ['*.png', '*.jpg', '*.jpeg']:
        sources.extend(glob.glob(os.path.join(source_glob.replace('*', f'*{ext[1:]}', 1)) if '*' in source_glob else source_glob + ext))
    
    # Reconstruct with proper globbing
    base_dir = os.path.dirname(source_glob)
    pattern = os.path.basename(source_glob)
    sources = []
    for ext in ['png', 'jpg', 'jpeg']:
        g = os.path.join(base_dir, pattern.replace('*', f'*.{ext}'))
        sources.extend(glob.glob(g))
    sources = sorted(set(sources))
    
    if not sources:
        print(f"  No files found matching {source_glob}")
        return 0, 0, 0, []
    
    os.makedirs(dest_dir, exist_ok=True)
    
    total_orig = 0
    total_new = 0
    processed = 0
    failed = []
    
    for i, src_path in enumerate(sources, 1):
        filename = os.path.basename(src_path)
        orig_size = os.path.getsize(src_path)
        
        # Apply rename
        new_filename = rename_func(filename)
        dst_path = os.path.join(dest_dir, new_filename)
        
        print(f"[{i}/{len(sources)}] {filename} -> {new_filename}...", end=" ", flush=True)
        
        success, error = process_image(src_path, dst_path, 'bit' if 'bit' in source_glob else 'top')
        
        if success:
            new_size = os.path.getsize(dst_path)
            saved = orig_size - new_size
            pct = (saved * 100 / orig_size) if orig_size > 0 else 0
            print(f"OK ({orig_size:,}B -> {new_size:,}B, {pct:.0f}% saved)")
            total_orig += orig_size
            total_new += new_size
            processed += 1
        else:
            print(f"FAILED ({error})")
            failed.append(f"{filename} ({error})")
    
    return processed, total_orig, total_new, failed

def main():
    parts_dir = "/home/sunnycsl/beyblade-x-tracker/parts"
    
    print("=" * 50)
    print("Task A: Processing Bit images")
    print("=" * 50)
    
    # Bit images: strip "bit_" prefix, handle jpg->png
    def bit_rename(f):
        # bit_A.png -> A.png, bit_P.jpg -> P.png
        new = re.sub(r'^bit_', '', f)
        # Convert jpg/jpeg to png
        new = re.sub(r'\.jpe?g$', '.png', new, flags=re.IGNORECASE)
        return new
    
    p, orig, new, failed = process_batch(
        os.path.join(parts_dir, "bit_*"),
        os.path.join(parts_dir, "bit"),
        "bit_",
        bit_rename
    )
    
    bit_processed = p
    bit_orig = orig
    bit_new = new
    bit_failed = failed
    
    print(f"\nBit batch complete: {bit_processed} files, {bit_orig:,} -> {bit_new:,} bytes")
    
    print("\n" + "=" * 50)
    print("Task B: Processing Top images")
    print("=" * 50)
    
    # Top images: strip "top_" prefix only
    def top_rename(f):
        return re.sub(r'^top_', '', f)
    
    p, orig, new, failed = process_batch(
        os.path.join(parts_dir, "top_*"),
        os.path.join(parts_dir, "top"),
        "top_",
        top_rename
    )
    
    top_processed = p
    top_orig = orig
    top_new = new
    top_failed = failed
    
    print("\n" + "=" * 50)
    print("PROCESSING COMPLETE")
    print("=" * 50)
    
    all_failed = bit_failed + top_failed
    
    print(f"\n{'Batch':<10} {'Processed':<12} {'Original':<15} {'Final':<15} {'Saved':<12} {'Avg Size':<12}")
    print("-" * 76)
    if bit_processed > 0:
        saved = bit_orig - bit_new
        avg = bit_new // bit_processed if bit_processed > 0 else 0
        print(f"{'Bit':<10} {bit_processed:<12} {bit_orig:<15,} {bit_new:<15,} {saved:<12,} {avg:<12,}")
    if top_processed > 0:
        saved = top_orig - top_new
        avg = top_new // top_processed if top_processed > 0 else 0
        print(f"{'Top':<10} {top_processed:<12} {top_orig:<15,} {top_new:<15,} {saved:<12,} {avg:<12,}")
    
    if all_failed:
        print(f"\n{len(all_failed)} FAILED FILES:")
        for f in all_failed:
            print(f"  - {f}")
    else:
        print(f"\nNo failures!")

if __name__ == "__main__":
    main()
