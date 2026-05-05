#!/usr/bin/env python3
"""
Beyblade X Daily News Fetcher
自動搜集每日 Beyblade X 新聞，更新 latest.json 並存檔
支持：新聞、YouTube影片、Twitter/X、論壇、香港資訊
"""

import os
import json
import re
import subprocess
from datetime import datetime, timedelta

BASE_DIR = '/home/sunnycsl/beyblade-x-tracker'
DAILY_DIR = os.path.join(BASE_DIR, 'daily')
ARCHIVE_DIR = os.path.join(DAILY_DIR, 'archive')
LATEST_FILE = os.path.join(DAILY_DIR, 'latest.json')
ARCHIVE_LIST = os.path.join(ARCHIVE_DIR, 'list.json')

def get_today():
    return datetime.now().strftime('%Y-%m-%d')

def get_hkt_now():
    return datetime.now().strftime('%Y-%m-%dT%H:%M:%S+08:00')

def format_display_date(iso):
    """2026-05-05 → 2026年5月5日"""
    d = datetime.strptime(iso, '%Y-%m-%d')
    return f"{d.year}年{d.month}月{d.day}日"

def shell(cmd, timeout=30):
    """Run shell command and return output"""
    try:
        r = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return r.stdout.strip(), r.returncode
    except subprocess.TimeoutExpired:
        return '', 124
    except Exception as e:
        return str(e), 1

def search_news(query, limit=8, news_type='news'):
    """用 Brave Search 搜新聞"""
    out, code = shell(f'curl -s --max-time 15 "https://api.search.brave.com/res/v1/news/search?q={query}&count={limit}&accept=application/json" -H "Accept: application/json" -H "X-Subscription-Token: $BRAVE_API_KEY" 2>/dev/null')
    if code != 0 or not out:
        return []

    try:
        data = json.loads(out)
        results = data.get('results', [])
        items = []
        for r in results[:limit]:
            title = r.get('title', '')
            desc = r.get('description', '')
            url = r.get('url', '')
            provider = r.get('provider', '')
            age = r.get('age', '')
            # 清理 HTML
            desc = re.sub(r'<[^>]+>', '', desc)
            # 提取 og:image
            image_url = extract_image_url(url)
            if title and desc:
                items.append({
                    'title': title[:120],
                    'summary': desc[:300],
                    'source': provider,
                    'url': url,
                    'age': age,
                    'image_url': image_url,
                    'type': news_type
                })
        return items
    except (json.JSONDecodeError, KeyError):
        return []

def search_youtube(query, limit=8):
    """用 Brave Search 搜 YouTube 影片"""
    out, code = shell(f'curl -s --max-time 15 "https://api.search.brave.com/res/v1/news/search?q={query}+site:youtube.com&count={limit}&accept=application/json" -H "Accept: application/json" -H "X-Subscription-Token: $BRAVE_API_KEY" 2>/dev/null')
    if code != 0 or not out:
        return []

    try:
        data = json.loads(out)
        results = data.get('results', [])
        items = []
        for r in results[:limit]:
            title = r.get('title', '')
            desc = r.get('description', '')
            url = r.get('url', '')
            provider = r.get('provider', '')
            age = r.get('age', '')
            desc = re.sub(r'<[^>]+>', '', desc)
            # YouTube 縮圖
            video_id = extract_youtube_id(url)
            image_url = f'https://img.youtube.com/vi/{video_id}/mqdefault.jpg' if video_id else None
            if title and url:
                items.append({
                    'title': title[:120],
                    'summary': desc[:300] if desc else 'YouTube 影片',
                    'source': provider or 'YouTube',
                    'url': url,
                    'age': age,
                    'image_url': image_url,
                    'type': 'video'
                })
        return items
    except (json.JSONDecodeError, KeyError):
        return []

def search_twitter(query, limit=8):
    """用 Brave Search 搜 Twitter/X 推文"""
    out, code = shell(f'curl -s --max-time 15 "https://api.search.brave.com/res/v1/news/search?q={query}+site:twitter.com+OR+site:x.com&count={limit}&accept=application/json" -H "Accept: application/json" -H "X-Subscription-Token: $BRAVE_API_KEY" 2>/dev/null')
    if code != 0 or not out:
        return []

    try:
        data = json.loads(out)
        results = data.get('results', [])
        items = []
        for r in results[:limit]:
            title = r.get('title', '')
            desc = r.get('description', '')
            url = r.get('url', '')
            provider = r.get('provider', '')
            age = r.get('age', '')
            desc = re.sub(r'<[^>]+>', '', desc)
            if title and url:
                items.append({
                    'title': title[:120],
                    'summary': desc[:300] if desc else 'Twitter/X 推文',
                    'source': provider or 'Twitter/X',
                    'url': url,
                    'age': age,
                    'image_url': None,
                    'type': 'news'
                })
        return items
    except (json.JSONDecodeError, KeyError):
        return []

def search_hk_sources(query, limit=8):
    """搜香港相關 Beyblade 資訊"""
    out, code = shell(f'curl -s --max-time 15 "https://api.search.brave.com/res/v1/news/search?q={query}&count={limit}&accept=application/json" -H "Accept: application/json" -H "X-Subscription-Token: $BRAVE_API_KEY" 2>/dev/null')
    if code != 0 or not out:
        return []

    try:
        data = json.loads(out)
        results = data.get('results', [])
        items = []
        for r in results[:limit]:
            title = r.get('title', '')
            desc = r.get('description', '')
            url = r.get('url', '')
            provider = r.get('provider', '')
            age = r.get('age', '')
            desc = re.sub(r'<[^>]+>', '', desc)
            image_url = extract_image_url(url)
            if title and desc:
                items.append({
                    'title': title[:120],
                    'summary': desc[:300],
                    'source': provider,
                    'url': url,
                    'age': age,
                    'image_url': image_url,
                    'type': 'hk'
                })
        return items
    except (json.JSONDecodeError, KeyError):
        return []

def search_forums(query, limit=8):
    """搜 Beyblade 論壇"""
    out, code = shell(f'curl -s --max-time 15 "https://api.search.brave.com/res/v1/news/search?q={query}&count={limit}&accept=application/json" -H "Accept: application/json" -H "X-Subscription-Token: $BRAVE_API_KEY" 2>/dev/null')
    if code != 0 or not out:
        return []

    try:
        data = json.loads(out)
        results = data.get('results', [])
        items = []
        for r in results[:limit]:
            title = r.get('title', '')
            desc = r.get('description', '')
            url = r.get('url', '')
            provider = r.get('provider', '')
            age = r.get('age', '')
            desc = re.sub(r'<[^>]+>', '', desc)
            # 檢查是否是論壇
            forum_sources = ['sfbayblade', 'beyblade.org', 'fandom.com', 'reddit']
            is_forum = any(src in url.lower() for src in forum_sources)
            if title and url:
                items.append({
                    'title': title[:120],
                    'summary': desc[:300] if desc else 'Beyblade 論壇討論',
                    'source': provider,
                    'url': url,
                    'age': age,
                    'image_url': None,
                    'type': 'forum' if is_forum else 'news'
                })
        return items
    except (json.JSONDecodeError, KeyError):
        return []

def extract_youtube_id(url):
    """從 YouTube URL 提取影片 ID"""
    patterns = [
        r'(?:youtube\.com/watch\?v=|youtu\.be/|youtube\.com/shorts/)([a-zA-Z0-9_-]{11})',
        r'youtube\.com/embed/([a-zA-Z0-9_-]{11})',
    ]
    for pattern in patterns:
        match = re.search(pattern, url)
        if match:
            return match.group(1)
    return None

def extract_image_url(url):
    """嘗試從頁面提取 og:image"""
    out, code = shell(f'curl -s --max-time 10 "{url}" -L | grep -oP \'og:image["\\s]*content=["\\s]*([^"\\s]+)\' | head -1 | sed \'s/og:image["\\s]*content=["\\s]*//\'')
    if out:
        return out.strip().strip('"')
    return None

# Beyblade X 相關關鍵詞（用於過濾噪音）
VALID_KEYWORDS = [
    'beyblade', 'blader', 'takara tomy', 'hasbro',
    'beyblade x', 'bx-', 'ux-', 'cx-', 'beyblades',
    'tournament', 'battle', 'championship', 'wbo',
    'spriggan', 'valkyrie', 'dragren', 'orion',
    ' wizard', 'knight', 'phoenix', 'shark', 'unicorn',
    '爆旋', '陀螺', '香港陀螺會', 'hong kong beyblade',
    'hk beyblade', 'hobbydigi'
]

# 噪音關鍵詞（明顯無關）
NOISE_KEYWORDS = [
    'bank heist', 'bangladesh', 'nested promise', 'rollback',
    'javascript', 'npm package', 'nodejs', 'react', 'python',
    'machine learning', 'startup', 'funding', ' Series A'
]

def is_relevant(title, summary):
    """檢查標題/摘要是否與 Beyblade 相關"""
    text = (title + ' ' + summary).lower()

    # 檢查噪音
    for noise in NOISE_KEYWORDS:
        if noise.lower() in text:
            return False

    # 檢查有效關鍵詞
    for keyword in VALID_KEYWORDS:
        if keyword.lower() in text:
            return True

    # 包含beyblade且有數字/英文關鍵詞
    if 'beyblade' in text and any(c.isdigit() for c in title):
        return True

    return False

def fetch_hackernews(query='beyblade x', limit=10):
    """從 Hacker News 搜 Beyblade X（已過濾噪音）"""
    # 替換空格為 +
    query_encoded = query.replace(' ', '+')
    out, code = shell(f'curl -s --max-time 15 "https://hn.algolia.com/api/v1/search?query={query_encoded}&tags=story&hitsPerPage={limit}"')
    if code != 0:
        return []
    try:
        data = json.loads(out)
        items = []
        seen_urls = set()
        for h in data.get('hits', [])[:limit]:
            title = h.get('title', '')
            if not title:
                continue

            # 跳過噪音
            desc = h.get('snippet', '') or title
            if not is_relevant(title, desc):
                continue

            url = h.get('url', '') or f"https://news.ycombinator.com/item?id={h.get('objectID','')}"
            if url in seen_urls:
                continue
            seen_urls.add(url)

            items.append({
                'title': title[:120],
                'summary': f"HN: {title[:200]}",
                'source': 'Hacker News',
                'url': url,
                'age': '',
                'image_url': None,
                'type': 'news'
            })
        return items
    except (json.JSONDecodeError, KeyError):
        return []

def fetch_takaratomy():
    """檢查 Takara Tomy 官網"""
    out, code = shell('curl -s --max-time 15 "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/" -L')
    if code != 0:
        return []
    # 簡單提取標題
    titles = re.findall(r'title="([^"]*(?:BX|UX)[^"]*)"', out)
    items = []
    for t in titles[:5]:
        if len(t) > 5:
            items.append({
                'title': t.strip(),
                'summary': f'Takara Tomy 官網產品資訊',
                'source': 'Takara Tomy',
                'url': 'https://beyblade.takaratomy.co.jp/beyblade-x/lineup/',
                'age': '',
                'image_url': None,
                'type': 'news'
            })
    return items

def fetch_hk_takaratomy():
    """檢查 Takara Tomy 香港官網"""
    out, code = shell('curl -s --max-time 15 "https://hk.takaratomy.com/" -L')
    if code != 0:
        # 嘗試备选
        out, code = shell('curl -s --max-time 15 "https://www.takaratomy.com.hk/" -L')
    if code != 0:
        return []
    
    # 提取 Beyblade 相關內容
    titles = re.findall(r'<title>([^<]+)</title>', out)
    items = []
    for t in titles[:3]:
        if 'beyblade' in t.lower() or '陀螺' in t:
            items.append({
                'title': t.strip(),
                'summary': 'Takara Tomy 香港官網資訊',
                'source': 'Takara Tomy HK',
                'url': 'https://hk.takaratomy.com/',
                'age': '',
                'image_url': None,
                'type': 'hk'
            })
    return items

def fetch_beyblade_wiki():
    """獲取 Beyblade Fandom Wiki 最新改動"""
    out, code = shell('curl -s --max-time 15 "https://beyblade.fandom.com/api.php?action=query&list=recentchanges&rcprop=title|timestamp|comment&rcnamespace=0&rclimit=10&format=json"')
    if code != 0:
        return []
    try:
        data = json.loads(out)
        items = []
        for change in data.get('query', {}).get('recentchanges', [])[:5]:
            title = change.get('title', '')
            if 'beyblade' in title.lower() or 'X' in title:
                ts = change.get('timestamp', '')
                items.append({
                    'title': title[:120],
                    'summary': f'Wiki: {title[:200]}',
                    'source': 'Beyblade Wiki',
                    'url': f'https://beyblade.fandom.com/wiki/{title.replace(" ", "_")}',
                    'age': ts,
                    'image_url': None,
                    'type': 'forum'
                })
        return items
    except (json.JSONDecodeError, KeyError):
        return []

def deduplicate(items):
    """去除重複標題"""
    seen = set()
    unique = []
    for item in items:
        key = item['title'][:60].lower()
        if key not in seen:
            seen.add(key)
            unique.append(item)
    return unique

def sort_by_relevance(items):
    """簡單排序：新news優先"""
    return items

def main():
    print(f"[{get_hkt_now()}] Beyblade Daily News 開始...")

    all_items = []

    # 1. Brave News Search - 主新聞
    queries = [
        'Beyblade X new release 2026',
        'Beyblade X tournament 2026',
        '爆旋陀螺X 新品',
    ]
    for q in queries:
        results = search_news(q, limit=5)
        if results:
            all_items.extend(results)
            print(f"  ✅ Brave '{q}': {len(results)} 條")

    # 2. YouTube 影片
    yt_queries = ['Beyblade X 2026', 'beyblade x review', '爆旋陀螺 X']
    for q in yt_queries:
        results = search_youtube(q, limit=5)
        if results:
            all_items.extend(results)
            print(f"  ✅ YouTube '{q}': {len(results)} 條")

    # 3. Twitter/X
    tw_queries = ['Beyblade X', 'beybladex', '爆旋陀螺']
    for q in tw_queries:
        results = search_twitter(q, limit=5)
        if results:
            all_items.extend(results)
            print(f"  ✅ Twitter '{q}': {len(results)} 條")

    # 4. 香港資訊
    hk_queries = [
        '香港陀螺會',
        'HK Beyblade',
        'HobbyDigi Beyblade',
        'takara tomy HK beyblade',
        '香港 beyblade 2026'
    ]
    for q in hk_queries:
        results = search_hk_sources(q, limit=5)
        if results:
            all_items.extend(results)
            print(f"  ✅ HK '{q}': {len(results)} 條")

    # 5. 論壇
    forum_queries = [
        'Beyblade sfbayblade',
        'Beyblade.org forum',
        'Beyblade tournament forum 2026'
    ]
    for q in forum_queries:
        results = search_forums(q, limit=5)
        if results:
            all_items.extend(results)
            print(f"  ✅ Forum '{q}': {len(results)} 條")

    # 6. Hacker News - 使用 "beyblade x" 查詢
    hn_items = fetch_hackernews('beyblade x', limit=8)
    if hn_items:
        all_items.extend(hn_items)
        print(f"  ✅ HN 'beyblade x': {len(hn_items)} 條")

    # 7. Takara Tomy
    tt_items = fetch_takaratomy()
    if tt_items:
        all_items.extend(tt_items)
        print(f"  ✅ Takara Tomy: {len(tt_items)} 條")

    # 8. Takara Tomy HK
    hk_tt_items = fetch_hk_takaratomy()
    if hk_tt_items:
        all_items.extend(hk_tt_items)
        print(f"  ✅ Takara Tomy HK: {len(hk_tt_items)} 條")

    # 9. Beyblade Wiki
    wiki_items = fetch_beyblade_wiki()
    if wiki_items:
        all_items.extend(wiki_items)
        print(f"  ✅ Beyblade Wiki: {len(wiki_items)} 條")

    # 去重
    all_items = deduplicate(all_items)

    # 限制最多 20 條
    all_items = all_items[:20]

    today = get_today()
    date_display = format_display_date(today)

    # 10. 生成今日資訊
    if all_items:
        headline = f"📰 {date_display} 資訊 ({len(all_items)} 則)"
        data = {
            'date': today,
            'headline': headline,
            'items': all_items,
            'generated_at': get_hkt_now()
        }
    else:
        headline = f"📰 {date_display} 暫無新資訊"
        data = {
            'date': today,
            'headline': headline,
            'items': [{
                'title': '今日暫無新資訊',
                'summary': '將於明日凌晨 04:00 HKT 自動更新',
                'source': '系統',
                'url': '',
                'image_url': None,
                'type': 'news'
            }],
            'generated_at': get_hkt_now()
        }

    # 11. 寫入 latest.json
    with open(LATEST_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"  ✅ 寫入 latest.json")

    # 12. 存檔
    archive_file = os.path.join(ARCHIVE_DIR, f'{today}.json')
    with open(archive_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    # 13. 更新 archive list
    archive_list = []
    if os.path.exists(ARCHIVE_LIST):
        with open(ARCHIVE_LIST, 'r') as f:
            archive_list = json.load(f)

    if today not in archive_list:
        archive_list.insert(0, today)
        archive_list = archive_list[:30]  # 保留最近30日

    with open(ARCHIVE_LIST, 'w') as f:
        json.dump(archive_list, f)

    print(f"  ✅ 存檔: {archive_file}")
    print(f"  ✅ archive list 更新: {len(archive_list)} 個日期")

    # 14. Git commit & push
    os.chdir(BASE_DIR)
    shell('git add daily/')
    shell('git add daily.html index.html')
    _, code = shell('git diff --cached --stat')
    if code == 0 and _:
        shell('git commit -m "📰 Daily Beyblade news update"')
        out, code = shell('git push origin main')
        if code == 0:
            print(f"  ✅ Git push 成功")
        else:
            print(f"  ⚠️ Git push 失敗: {out}")
    else:
        print(f"  ℹ️ 冇變更需要提交")

    print(f"[{get_hkt_now()}] 完成!")

if __name__ == '__main__':
    main()
