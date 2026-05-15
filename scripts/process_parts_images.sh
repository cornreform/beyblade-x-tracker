#!/bin/bash
# Batch image processing script for Beyblade X parts
# Uses ImageMagick mogrify + pngquant for optimization

set -uo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

usage() {
    echo "Usage: $0 <source_dir> <output_dir> [--rename pattern]"
    echo "  source_dir    : Source directory containing PNG files"
    echo "  output_dir    : Destination directory for processed files"
    echo "  --rename      : Optional rename pattern (e.g., 's/ratchet_//' to remove prefix)"
    exit 1
}

# Arguments
SOURCE_DIR="${1:-}"
OUTPUT_DIR="${2:-}"

if [[ -z "$SOURCE_DIR" || -z "$OUTPUT_DIR" ]]; then
    usage
fi

# Handle optional rename argument
RENAME_PATTERN=""
if [[ "${3:-}" == "--rename" && -n "${4:-}" ]]; then
    RENAME_PATTERN="$4"
fi

# Resolve to absolute paths
SOURCE_DIR="$(cd "$SOURCE_DIR" && pwd)"
OUTPUT_DIR="$(cd "$OUTPUT_DIR" && pwd)"

echo "Source: $SOURCE_DIR"
echo "Output: $OUTPUT_DIR"
[[ -n "$RENAME_PATTERN" ]] && echo "Rename pattern: $RENAME_PATTERN"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Count total files - use globbing instead of find for compatibility
shopt -s nullglob nocaseglob
FILES=("$SOURCE_DIR"/*.png)
shopt -s nullglob

if [[ ${#FILES[@]} -eq 0 || ! -e "${FILES[0]:-}" ]]; then
    echo -e "${YELLOW}No PNG files found in $SOURCE_DIR${NC}"
    exit 0
fi

TOTAL=${#FILES[@]}
echo -e "${GREEN}Found $TOTAL PNG files to process${NC}"
echo ""

# Statistics
TOTAL_ORIG_SIZE=0
TOTAL_NEW_SIZE=0
FAILED_FILES=()
PROCESSED=0

# Progress display
i=0
for FILE in "${FILES[@]}"; do
    i=$((i + 1))

    filename=$(basename "$FILE")
    original_size=$(stat -c%s "$FILE" 2>/dev/null || echo 0)

    # Apply rename pattern if specified
    if [[ -n "$RENAME_PATTERN" ]]; then
        new_filename=$(echo "$filename" | sed "$RENAME_PATTERN")
    else
        new_filename="$filename"
    fi

    output_path="$OUTPUT_DIR/$new_filename"

    printf "[%d/%d] Processing: %s -> %s ... " "$i" "$TOTAL" "$filename" "$new_filename"

    # Step 1: Process to temp file (using mogrify with explicit output)
    temp_file=$(mktemp /tmp/image_process_XXXXXX.png)

    if ! mogrify -format png -resize '500x>' -fuzz 5% -trim -write "$temp_file" "$FILE" 2>/dev/null; then
        echo -e "${RED}FAILED (mogrify)${NC}"
        FAILED_FILES+=("$filename (mogrify error)")
        rm -f "$temp_file"
        continue
    fi

    # Step 2: pngquant to final output
    if ! pngquant --quality=65-80 --output "$output_path" --force "$temp_file" 2>/dev/null; then
        echo -e "${RED}FAILED (pngquant)${NC}"
        FAILED_FILES+=("$filename (pngquant error)")
        rm -f "$temp_file"
        continue
    fi

    # Get new size
    new_size=$(stat -c%s "$output_path" 2>/dev/null || echo 0)

    TOTAL_ORIG_SIZE=$((TOTAL_ORIG_SIZE + original_size))
    TOTAL_NEW_SIZE=$((TOTAL_NEW_SIZE + new_size))
    ((PROCESSED++))

    saved=$((original_size - new_size))
    pct=0
    if [[ $original_size -gt 0 ]]; then
        pct=$((saved * 100 / original_size))
    fi
    echo -e "${GREEN}OK${NC} (${original_size}B -> ${new_size}B, ${pct}% saved)"

    rm -f "$temp_file"
done

echo ""
echo "========================================"
echo -e "${GREEN}Processing Complete${NC}"
echo "========================================"
echo "Files processed: $PROCESSED/$TOTAL"
echo "Original total: $TOTAL_ORIG_SIZE bytes"
echo "New total:      $TOTAL_NEW_SIZE bytes"
saved=$((TOTAL_ORIG_SIZE - TOTAL_NEW_SIZE))
echo -e "Bytes saved:    ${GREEN}$saved bytes${NC}"
if [[ $TOTAL_ORIG_SIZE -gt 0 ]]; then
    pct=$((saved * 100 / TOTAL_ORIG_SIZE))
    echo "Reduction:      ${pct}%"
fi
if [[ $PROCESSED -gt 0 ]]; then
    avg=$((TOTAL_NEW_SIZE / PROCESSED))
    echo "Avg size:       $avg bytes per file"
fi

if [[ ${#FAILED_FILES[@]} -gt 0 ]]; then
    echo ""
    echo -e "${RED}Failed files (${#FAILED_FILES[@]}):${NC}"
    for f in "${FAILED_FILES[@]}"; do
        echo "  - $f"
    done
fi

echo ""