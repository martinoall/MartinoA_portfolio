#!/usr/bin/env python3
import os
from PIL import Image

# ─── CONFIG ────────────────────────────────────────────────────────────────────

# Folder where you put your original JPGs/PNGs
INPUT_DIR = 'raw_images'

# Where optimized full-size images will go
FULL_DIR = 'static/images/full'

# Where thumbnails will go
THUMB_DIR = 'static/images/thumbs'

# Maximum width for full-size images (pixels)
MAX_WIDTH = 1920

# Width for thumbnails (pixels)
THUMB_WIDTH = 300

# ─── SCRIPT ────────────────────────────────────────────────────────────────────

# Create output dirs if they don’t exist
os.makedirs(FULL_DIR, exist_ok=True)
os.makedirs(THUMB_DIR, exist_ok=True)

for filename in os.listdir(INPUT_DIR):
    if not filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        continue

    # Load and convert to RGB
    src_path = os.path.join(INPUT_DIR, filename)
    img = Image.open(src_path).convert('RGB')

    # Resize for full-size
    w, h = img.size
    if w > MAX_WIDTH:
        ratio = MAX_WIDTH / w
        img_full = img.resize((MAX_WIDTH, int(h * ratio)), Image.LANCZOS)
    else:
        img_full = img

    # Save full-size as WebP
    base, _ = os.path.splitext(filename)
    full_out = os.path.join(FULL_DIR, f'{base}.webp')
    img_full.save(full_out, 'WEBP', quality=80, optimize=True)

    # Create thumbnail
    thumb_ratio = THUMB_WIDTH / img_full.width
    img_thumb = img_full.resize(
        (THUMB_WIDTH, int(img_full.height * thumb_ratio)),
        Image.LANCZOS
    )
    thumb_out = os.path.join(THUMB_DIR, f'{base}_thumb.webp')
    img_thumb.save(thumb_out, 'WEBP', quality=60, optimize=True)

print("✅ All images processed!")