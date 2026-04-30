#!/usr/bin/env python3
"""
Beyblade X Tracker — Auto Image Fixer
每晚自動掃描並修復 index.html 內嘅圖片路徑問題

修復規則：
1. image 為 null 但 parts/top_{CODE}.png 存在 → 設為相對路徑
2. image 為絕對路徑 /parts/... → 改為相對路徑 parts/...
3. image 路徑存在但圖片文件缺失 → 記錄警告（唔自動刪除）

作者: Hermes Agent (自動生成)
"""
import json
import os
import re
import subprocess
import sys
from datetime import datetime
from pathlib import Path

REPO_DIR = Path("/home/sunnycsl/beyblade-x-tracker")
INDEX_HTML = REPO_DIR / "index.html"
PARTS_DIR = REPO_DIR / "parts"


def run_git(cmd: list[str], cwd: str = str(REPO_DIR)) -> subprocess.CompletedProcess:
    """執行 git 命令，失敗時 raise CalledProcessError"""
    return subprocess.run(
        cmd, cwd=cwd, capture_output=True, text=True, check=True
    )


def load_global_db(html_path: Path) -> tuple[dict, int, int]:
    """
    從 index.html 提取 GLOBAL_DB JSON。
    返回 (db_dict, start_pos, end_pos)
    """
    content = html_path.read_text(encoding="utf-8")
    match = re.search(r"var\s+GLOBAL_DB\s*=\s*(\{[\s\S]*?\});", content)
    if not match:
        raise ValueError("❌ GLOBAL_DB 唔見咗！")
    db = json.loads(match.group(1))
    return db, match.start(1), match.end(1)


def save_global_db(html_path: Path, db: dict, start: int, end: int):
    """將修改後嘅 GLOBAL_DB 寫返入 index.html"""
    content = html_path.read_text(encoding="utf-8")
    db_json = json.dumps(db, ensure_ascii=False, separators=(',', ':'))
    new_content = content[:start] + db_json + content[end:]
    html_path.write_text(new_content, encoding="utf-8")


def fix_image_paths() -> tuple[int, int, list[str]]:
    """
    掃描並修復圖片路徑
    返回: (fixed_null_count, fixed_abs_count, warnings)
    """
    db, start, end = load_global_db(INDEX_HTML)
    tops = db.get("tops", [])
    fixed_null = 0
    fixed_abs = 0
    warnings = []

    for top in tops:
        code = top.get("code", "")
        image = top.get("image")
        img_file = PARTS_DIR / f"top_{code}.png"

        # Rule 1: null → 相對路徑 (如果圖片存在)
        if image is None:
            if img_file.exists():
                top["image"] = f"parts/top_{code}.png"
                fixed_null += 1
                print(f"  ✅ [{code}] null → parts/top_{code}.png")
            else:
                warnings.append(f"⚠️  [{code}] image 為 null 且圖片缺失: {img_file.name}")

        # Rule 2: 絕對路徑 → 相對路徑
        elif isinstance(image, str) and image.startswith("/parts/"):
            top["image"] = image.lstrip("/")
            fixed_abs += 1
            print(f"  ✅ [{code}] {image} → {top['image']}")

        # Rule 3: 路徑存在但文件缺失
        elif isinstance(image, str):
            actual = PARTS_DIR / os.path.basename(image)
            if not actual.exists():
                warnings.append(f"⚠️  [{code}] 路徑存在但圖片缺失: {os.path.basename(image)}")

    total_fixed = fixed_null + fixed_abs
    if total_fixed > 0:
        save_global_db(INDEX_HTML, db, start, end)

    return fixed_null, fixed_abs, warnings


def git_commit_and_push() -> bool:
    """如果有變更，自動 commit + push"""
    try:
        # Check status
        result = run_git(["git", "status", "--porcelain"])
        if not result.stdout.strip():
            print("📦 無變更，唔使 commit")
            return False

        # Add index.html
        run_git(["git", "add", "index.html"])

        # Commit with timestamp
        now = datetime.now().strftime("%Y-%m-%d %H:%M")
        run_git([
            "git", "commit", "-m",
            f"auto: 修復圖片路徑 — {now}\n\n- 自動掃描並修復 null / 絕對路徑問題"
        ])

        # Push
        run_git(["git", "push"])
        print("🚀 Push 成功！")
        return True

    except subprocess.CalledProcessError as e:
        print(f"❌ Git 操作失敗: {e}")
        print(f"   stderr: {e.stderr}")
        return False


def main():
    print(f"🔍 [{datetime.now().strftime('%Y-%m-%d %H:%M')}] 開始自動修復...")
    print(f"   Repo: {REPO_DIR}")
    print(f"   Parts: {len(list(PARTS_DIR.glob('top_*.png')))} 張圖片")

    fixed_null, fixed_abs, warnings = fix_image_paths()

    print(f"\n📊 結果:")
    print(f"   修復 null → 路徑: {fixed_null} 款")
    print(f"   修復絕對 → 相對: {fixed_abs} 款")

    if warnings:
        print(f"\n⚠️  警告 ({len(warnings)}):")
        for w in warnings:
            print(f"   {w}")

    if fixed_null + fixed_abs > 0:
        print("\n📝 執行 git commit + push...")
        pushed = git_commit_and_push()
        if pushed:
            print("✅ 完成！GitHub Pages 會喺幾分鐘內更新。")
    else:
        print("✅ 無需修復，一切正常。")

    return 0


if __name__ == "__main__":
    sys.exit(main())
