"""
Build LeBlanc gallery assets sized for how the UI actually renders them.

Measured facts that drive every decision here:
  - gallery cards render ~236x220 (essentially SQUARE) with background-size:cover
  - the detail hero renders ~665x460 (1.45:1)
  - clicking a gallery card opens the same file full-size in a modal

So: gallery art is authored ~1.07:1. Photographic subjects are crop-centred.
Dense admin UI cannot be legible at 236px, so those become composed tiles: a
brand-coloured field, a large label that IS readable at thumbnail size, and the
real screenshot inset large enough to read once expanded in the modal.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

SRC = "leblanc"
EL = "leblanc/el"
OUT = "/home/max/workspace/Portfolio/public/projects"
os.makedirs(OUT, exist_ok=True)

FONTS = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
]
def font(sz, bold=True):
    for f in FONTS:
        if os.path.exists(f) and (("Bold" in f) == bold or not bold):
            try: return ImageFont.truetype(f, sz)
            except Exception: pass
    for f in FONTS:
        if os.path.exists(f):
            try: return ImageFont.truetype(f, sz)
            except Exception: pass
    return ImageFont.load_default()

def crop_to(im, ratio, cx=0.5, cy=0.5):
    """Crop to `ratio` (w/h) around a relative centre, never upscaling."""
    w, h = im.size
    if w / h > ratio:
        nw, nh = int(h * ratio), h
    else:
        nw, nh = w, int(w / ratio)
    x = max(0, min(w - nw, int(cx * w - nw / 2)))
    y = max(0, min(h - nh, int(cy * h - nh / 2)))
    return im.crop((x, y, x + nw, y + nh))

def rounded(im, r):
    mask = Image.new("L", im.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, im.size[0]-1, im.size[1]-1], r, fill=255)
    out = im.convert("RGBA"); out.putalpha(mask)
    return out

def field(size, c1, c2, c3):
    """Brand gradient with a soft glow, same language as the site."""
    w, h = size
    base = Image.new("RGB", (w, h), c1)
    top = Image.new("RGB", (w, h), c2)
    m = Image.linear_gradient("L").resize((w, h)).rotate(0)
    base = Image.composite(top, base, m.point(lambda v: 255 - v))
    glow = Image.new("RGB", (w, h), c3)
    gm = Image.new("L", (w, h), 0)
    ImageDraw.Draw(gm).ellipse([int(w*0.42), int(-h*0.30), int(w*1.30), int(h*0.72)], fill=90)
    gm = gm.filter(ImageFilter.GaussianBlur(w//7))
    return Image.composite(glow, base, gm)

def tile(label, sub, shot_path, c1, c2, c3, crop=None, focus=(0.5, 0.5)):
    """Tile at the card's exact 1.07 ratio, so the gallery crops nothing."""
    W, H = 1284, 1200
    card = field((W, H), c1, c2, c3)
    d = ImageDraw.Draw(card)

    d.text((72, 74), label, font=font(74), fill="#FFFFFF")
    d.text((76, 168), sub, font=font(38, bold=False), fill=c3)
    d.rounded_rectangle([76, 232, 76 + 150, 240], 4, fill=c3)

    shot = Image.open(shot_path).convert("RGB")
    if crop:
        sw, sh = shot.size
        shot = shot.crop((int(crop[0]*sw), int(crop[1]*sh), int(crop[2]*sw), int(crop[3]*sh)))
    inset_w = W - 152
    inset_h = H - 330
    # CONTAIN-fit on a white plate: the screenshot is never cropped, so no
    # interface text is ever cut mid-word.
    sc = min(inset_w / shot.width, inset_h / shot.height)
    fitted = shot.resize((max(1, round(shot.width*sc)), max(1, round(shot.height*sc))), Image.LANCZOS)
    plate = Image.new("RGB", (inset_w, inset_h), "#FFFFFF")
    plate.paste(fitted, ((inset_w-fitted.width)//2, (inset_h-fitted.height)//2))

    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle([76, 300, 76+inset_w, 300+inset_h], 26, fill=(0, 0, 0, 120))
    card = Image.alpha_composite(card.convert("RGBA"), shadow.filter(ImageFilter.GaussianBlur(22)))
    card.paste(rounded(plate, 26), (76, 296), rounded(plate, 26))
    return card.convert("RGB")

def save(im, name, maxw=1400):
    if im.width > maxw:
        im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    p = f"{OUT}/{name}"
    im.save(p, "PNG", optimize=True)
    print(f"  {name:22} {im.size[0]}x{im.size[1]}  ratio {im.size[0]/im.size[1]:.2f}  {os.path.getsize(p)//1024} KB")

PUR = ("#3F1259", "#7A2FA8", "#E9D5FF")
TEAL = ("#0B4A42", "#12796C", "#B8F0E4")
PINK = ("#5C0B3A", "#B01B6E", "#FFD1E8")

print("photographic (square, subject-centred):")
save(crop_to(Image.open(f"{SRC}/globe-still.png").convert("RGB"), 1.07, 0.50, 0.62), "lb-globe.png")
save(crop_to(Image.open(f"{SRC}/pub-classes-760.png").convert("RGB"), 1.07, 0.43, 0.66), "lb-classes.png")
save(crop_to(Image.open(f"{EL}/workshop-card.png").convert("RGB"), 1.07, 0.50, 0.42), "lb-workshop.png")
save(crop_to(Image.open(f"{EL}/team-card.png").convert("RGB"), 1.07, 0.50, 0.30), "lb-team.png")

print("hero (1.45:1):")
save(crop_to(Image.open(f"{SRC}/globe-still.png").convert("RGB"), 1.45, 0.50, 0.58), "lb-hero.png", 1800)

print("composed tiles (dense UI):")
save(tile("CSV bulk import", "Dry-run preview before any write",
          f"{EL}/admin-import.png", *TEAL, focus=(0.5, 0.55)), "lb-admin.png")
save(tile("Approval queue", "Approve or reject new families",
          f"{EL}/admin-approve.png", *PUR, focus=(0.5, 0.4)), "lb-approvals.png")
save(tile("Automated intake", "Seven routed request forms",
          f"{EL}/forms-table.png", *PINK, focus=(0.42, 0.5)), "lb-forms.png")
save(tile("Instructor schedule", "Week, month and list views",
          f"{SRC}/bk-dash-2400.png", *PUR, crop=(0.06, 0.72, 0.56, 1.0), focus=(0.5, 0.5)), "lb-schedule.png")
