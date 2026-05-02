#!/usr/bin/env python3
"""Download Beyblade X parts images from SpinCityImports.
Official parts list from PARTS_DATA in app.js
"""
import os, re, time, urllib.request

PARTS_DIR = "/home/sunnycsl/beyblade-x-tracker/parts"
os.makedirs(PARTS_DIR, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "Referer": "https://spincityimports.com/"
}

def download(url, path):
    if os.path.exists(path):
        print(f"  [SKIP] {os.path.basename(path)} already exists")
        return True
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        with open(path, 'wb') as f:
            f.write(data)
        print(f"  [OK] {os.path.basename(path)} ({len(data):,} bytes)")
        return True
    except Exception as e:
        print(f"  [FAIL] {os.path.basename(path)}: {e}")
        return False

def get_page(url):
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            return resp.read().decode('utf-8', 'ignore')
    except Exception as e:
        print(f"  [ERROR] {url}: {e}")
        return ""

def extract_images(html):
    pattern = r'https://spincityimports\.com/cdn/shop/files/[^\"\'>\s]+\.(png|jpg|jpeg|webp)'
    found = re.findall(pattern, html)
    seen = set()
    result = []
    for img in found:
        if img not in seen:
            seen.add(img)
            result.append(img)
    # Prefer 300x300 variant
    for img in result:
        if '300x300' in img or 'compact' in img:
            return img
    return result[0] if result else ""

# ─── OFFICIAL RATCHET LIST (25 types from PARTS_DATA) ───
# URL slug on SpinCityImports: takara-tomy-beyblade-x-bx-parts-ratchet-{SIZE}
# Local file: ratchet_{FACES}-{HEIGHT}.png
RATCHETS = [
    ("1-60",  "ratchet_1_60.png"),
    ("0-70",  "ratchet_0_70.png"),
    ("1-70",  "ratchet_1_70.png"),
    ("3-60",  "ratchet_3_60.png"),
    ("3-70",  "ratchet_3_70.png"),
    ("3-80",  "ratchet_3_80.png"),
    ("4-50",  "ratchet_4_50.png"),
    ("4-55",  "ratchet_4_55.png"),
    ("5-60",  "ratchet_5_60.png"),
    ("5-70",  "ratchet_5_70.png"),
    ("6-60",  "ratchet_6_60.png"),
    ("6-70",  "ratchet_6_70.png"),
    ("6-80",  "ratchet_6_80.png"),
    ("7-60",  "ratchet_7_60.png"),
    ("7-70",  "ratchet_7_70.png"),
    ("8-60",  "ratchet_8_60.png"),
    ("9-60",  "ratchet_9_60.png"),
    ("9-70",  "ratchet_9_70.png"),
    ("9-80",  "ratchet_9_80.png"),
    ("M-85",  "ratchet_M_85.png"),
    ("H-70",  "ratchet_H_70.png"),
    ("V-70",  "ratchet_V_70.png"),
    ("V-90",  "ratchet_V_90.png"),
    ("Z-70",  "ratchet_Z_70.png"),
    ("A-70",  "ratchet_A_70.png"),
]

# Special-case URL slugs that don't follow the standard pattern
RATCHET_URL_OVERRIDE = {
    "4-50": "ux-15-4-50-ratchet",
}

# ─── OFFICIAL BIT LIST (32 types from PARTS_DATA) ───
# Local file: bit_{FIRST_LETTER}.png  (e.g. "Flat"→F, "Taper"→T, "Ball"→B)
BITS = [
    ("Flat",       "bit_F.png"),
    ("Taper",      "bit_T.png"),
    ("Ball",       "bit_B.png"),
    ("Needle",     "bit_N.png"),
    ("High-Needle","bit_HN.png"),
    ("Low-Flat",   "bit_LF.png"),
    ("Point",      "bit_P.png"),
    ("Orb",        "bit_O.png"),
    ("Rush",       "bit_R.png"),
    ("High-Taper", "bit_HT.png"),
    ("Spike",      "bit_S.png"),
    ("Accel",      "bit_A.png"),
    ("Ball",       "bit_DB.png"),   # Disc Ball - duplicate letter D
    ("Hexa",       "bit_H.png"),
    ("Quake",      "bit_Q.png"),
    ("Unite",      "bit_U.png"),
    ("Cyclone",    "bit_C.png"),
    ("Dot",        "bit_D.png"),
    ("Gear-Ball",  "bit_GB.png"),
    ("Gear-Flat",  "bit_GF.png"),
    ("Gear-Needle","bit_GN.png"),
    ("Gear-Point", "bit_GP.png"),
    ("Elevate",    "bit_E.png"),
    ("Free-Ball",  "bit_FB.png"),
    ("Bound-Spike","bit_BS.png"),
    ("Rubber-Accel","bit_RA.png"),
    ("Level",      "bit_L.png"),
    ("Trans-Point","bit_TP.png"),
    ("Low-Rush",   "bit_LR.png"),
    ("Under-Needle","bit_UN.png"),
    ("Vortex",     "bit_V.png"),
    ("Low-Orb",    "bit_LO.png"),
    # Note: Kick (K) and Wedge (W) are in app.js PARTS_DATA but may not exist on SpinCityImports
    # Adding them with placeholder URLs to try:
]

# SpinCityImports URL slugs for bits (handle special cases)
BIT_URL_OVERRIDE = {
    "Flat":        "takara-tomy-beyblade-x-bx-parts-bit-flat",
    "Taper":       "takara-tomy-beyblade-x-bx-parts-bit-taper",
    "Ball":        "takara-tomy-beyblade-x-bx-parts-bit-ball",
    "Needle":      "takara-tomy-beyblade-x-bx-parts-bit-needle",
    "High-Needle": "takara-tomy-beyblade-x-bx-parts-bit-high-needle",
    "Low-Flat":    "takara-tomy-beyblade-x-bx-parts-bit-low-flat",
    "Point":       "takara-tomy-beyblade-x-bx-parts-bit-point",
    "Orb":         "takara-tomy-beyblade-x-bx-parts-bit-orb",
    "Rush":        "takara-tomy-beyblade-x-bx-parts-bit-rush",
    "High-Taper":  "takara-tomy-beyblade-x-bx-parts-bit-high-taper",
    "Spike":       "takara-tomy-beyblade-x-bx-parts-bit-spike",
    "Accel":       "takara-tomy-beyblade-x-bx-parts-bit-accel",
    "Disc-Ball":   "takara-tomy-beyblade-x-bx-parts-bit-disc-ball",
    "Hexa":        "takara-tomy-beyblade-x-bx-parts-bit-hexa",
    "Quake":       "takara-tomy-beyblade-x-bx-parts-bit-quake",
    "Unite":       "takara-tomy-beyblade-x-bx-parts-bit-unite",
    "Cyclone":     "takara-tomy-beyblade-x-bx-parts-bit-cyclone",
    "Dot":         "takara-tomy-beyblade-x-bx-parts-bit-dot",
    "Gear-Ball":   "takara-tomy-beyblade-x-bx-parts-bit-gear-ball",
    "Gear-Flat":   "takara-tomy-beyblade-x-bx-parts-bit-gear-flat",
    "Gear-Needle": "takara-tomy-beyblade-x-bx-parts-bit-gear-needle",
    "Gear-Point":  "takara-tomy-beyblade-x-bx-parts-bit-gear-point",
    "Elevate":     "takara-tomy-beyblade-x-bx-parts-bit-elevate",
    "Free-Ball":   "takara-tomy-beyblade-x-bx-parts-bit-free-ball",
    "Bound-Spike": "takara-tomy-beyblade-x-bx-parts-bit-bound-spike",
    "Rubber-Accel": "takara-tomy-beyblade-x-bx-parts-bit-rubber-accel",
    "Level":       "takara-tomy-beyblade-x-bx-parts-bit-level",
    "Trans-Point": "takara-tomy-beyblade-x-bx-parts-bit-trans-point",
    "Low-Rush":    "takara-tomy-beyblade-x-bx-parts-bit-low-rush",
    "Under-Needle":"takara-tomy-beyblade-x-bx-parts-bit-under-needle",
    "Vortex":      "vortex-bit-cx-01-beyblade-x-takara-tomy",
    "Low-Orb":     "takara-tomy-beyblade-x-bx-parts-bit-low-orb",
    "Kick":        "takara-tomy-beyblade-x-bx-parts-bit-kick",
    "Wedge":       "takara-tomy-beyblade-x-bx-parts-bit-wedge",
}

# ─── DOWNLOAD RATCHETS ───
print("=== RATCHETS (25) ===")
ratchet_ok = 0
for size, filename in RATCHETS:
    url_slug = RATCHET_URL_OVERRIDE.get(size, f"takara-tomy-beyblade-x-bx-parts-ratchet-{size}")
    url = f"https://spincityimports.com/products/{url_slug}"
    local = os.path.join(PARTS_DIR, filename)
    if os.path.exists(local):
        print(f"[{filename}] exists, skip")
        ratchet_ok += 1
        continue
    print(f"Fetching ratchet-{size}...")
    html = get_page(url)
    if not html:
        continue
    img_url = extract_images(html)
    if img_url:
        if download(img_url, local):
            ratchet_ok += 1
            time.sleep(0.5)
    else:
        print(f"  [FAIL] No image for ratchet-{size}")
print(f"Ratchets: {ratchet_ok}/{len(RATCHETS)} downloaded")

# ─── DOWNLOAD BITS ───
print("\n=== BITS (32+) ===")
bit_ok = 0
for name, filename in BITS:
    url_slug = BIT_URL_OVERRIDE.get(name, name.lower().replace(" ", "-"))
    url = f"https://spincityimports.com/products/{url_slug}"
    local = os.path.join(PARTS_DIR, filename)
    if os.path.exists(local):
        print(f"[{filename}] exists, skip")
        bit_ok += 1
        continue
    print(f"Fetching bit-{name}...")
    html = get_page(url)
    if not html:
        continue
    img_url = extract_images(html)
    if img_url:
        if download(img_url, local):
            bit_ok += 1
            time.sleep(0.5)
    else:
        print(f"  [FAIL] No image for bit-{name}")
print(f"Bits: {bit_ok}/{len(BITS)} downloaded")

print("\n=== SUMMARY ===")
print(f"Ratchets: {ratchet_ok}/{len(RATCHETS)}")
print(f"Bits: {bit_ok}/{len(BITS)}")
total = ratchet_ok + bit_ok
print(f"Total: {total}/{len(RATCHETS)+len(BITS)}")
