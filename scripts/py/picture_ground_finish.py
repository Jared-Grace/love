"""Turn a folder of small drawn grounds into finished lyric-video grounds.

The route the human decided on 2026-09-15: draw cheap and small on fal's
Z-Image, then do the two remaining jobs here, locally, for nothing - paint out
the lettering the model wrote of its own accord, and scale the picture up to the
frame a YouTube Short is shown in.

For each picture, in this order:

1. **Upscale once, only to look.** Z-Image's smallest true 9:16 draw is 576x1024
   (it clamps a side under 512 up to 512), and lettering at that size is a few
   pixels tall. EasyOCR was measured on 1152x2048 grounds (seven of seven
   lettered found, zero of six clean frames marked - picture_lettering_find.py),
   so it is asked at the finished size, where the letters are the size it was
   measured on, with the same loose thresholds.
2. **Paint out at the drawn size.** The boxes are carried back down to the
   draw, widened, and LaMa (big-lama.pt, cached by torch hub) fills them there.
   LaMa was trained on small pictures, and the upscale that follows smooths any
   seam it leaves rather than enlarging one.
3. **Upscale the repaired picture** with Real-ESRGAN's general compact x4 model
   and bring it down to the frame with area averaging.

A picture already in the out folder is skipped, so a run that dies is finished
by running it again. What each picture had painted out is printed as JSON, so a
frame can be checked by eye against its raw draw.

Marks that are not letters - a painted dash, a signature squiggle - are not
found by OCR and pass through. picture_lettering_residue.py checks a repair for
leftover strokes.

Usage: python picture_ground_finish.py <raw_folder> <out_folder> <width> <height>
"""

import json
import sys
import time
from pathlib import Path

import cv2
import easyocr
import numpy as np
import spandrel
import torch

LAMA = Path.home() / ".cache/torch/hub/checkpoints/big-lama.pt"
UPSCALER = Path.home() / ".cache/picture_models/realesr-general-x4v3.pth"
WIDEN = 0.35  # of a box's height, added on every side before painting out


def upscale(model, rgb, width, height):
    tensor = torch.from_numpy(rgb).permute(2, 0, 1).unsqueeze(0).float() / 255
    with torch.no_grad():
        big = model(tensor)
    big = big.squeeze(0).permute(1, 2, 0).clamp(0, 1).numpy()
    big = (big * 255).round().astype(np.uint8)
    return cv2.resize(big, (width, height), interpolation=cv2.INTER_AREA)


def paint_out(lama, rgb, mask):
    h, w = mask.shape
    pad_h = (8 - h % 8) % 8
    pad_w = (8 - w % 8) % 8
    rgb_p = np.pad(rgb, ((0, pad_h), (0, pad_w), (0, 0)), mode="reflect")
    mask_p = np.pad(mask, ((0, pad_h), (0, pad_w)), mode="reflect")
    image = torch.from_numpy(rgb_p).permute(2, 0, 1).unsqueeze(0).float() / 255
    masked = torch.from_numpy((mask_p > 0).astype(np.float32))[None, None]
    with torch.no_grad():
        out = lama(image, masked)
    out = out[0].permute(1, 2, 0).numpy()
    out = np.clip(out * 255, 0, 255).astype(np.uint8)[:h, :w]
    keep = (mask > 0)[..., None]
    return np.where(keep, out, rgb)


def main():
    raw_folder = Path(sys.argv[1])
    out_folder = Path(sys.argv[2])
    width = int(sys.argv[3])
    height = int(sys.argv[4])
    out_folder.mkdir(parents=True, exist_ok=True)
    torch.set_num_threads(max(1, torch.get_num_threads()))
    reader = easyocr.Reader(["en"], gpu=False, verbose=False)
    upscaler = spandrel.ModelLoader().load_from_file(str(UPSCALER)).model.eval()
    lama = torch.jit.load(str(LAMA), map_location="cpu").eval()
    rows = {}
    for path in sorted(raw_folder.glob("*.png")):
        target = out_folder / path.name
        if target.exists():
            continue
        began = time.time()
        rgb = cv2.cvtColor(cv2.imread(str(path)), cv2.COLOR_BGR2RGB)
        raw_h, raw_w = rgb.shape[:2]
        looked = upscale(upscaler, rgb, width, height)
        found = reader.readtext(
            looked, text_threshold=0.3, low_text=0.2, link_threshold=0.3
        )
        mask = np.zeros((raw_h, raw_w), np.uint8)
        marks = []
        for box, text, confidence in found:
            xs = [p[0] * raw_w / width for p in box]
            ys = [p[1] * raw_h / height for p in box]
            grow = WIDEN * (max(ys) - min(ys))
            x0 = int(max(0, min(xs) - grow))
            y0 = int(max(0, min(ys) - grow))
            x1 = int(min(raw_w, max(xs) + grow + 1))
            y1 = int(min(raw_h, max(ys) + grow + 1))
            mask[y0:y1, x0:x1] = 255
            marks.append(
                {"text": text, "confidence": round(float(confidence), 4),
                 "x": x0, "y": y0, "w": x1 - x0, "h": y1 - y0}
            )
        if marks:
            rgb = paint_out(lama, rgb, mask)
            finished = upscale(upscaler, rgb, width, height)
        else:
            finished = looked
        cv2.imwrite(str(target), cv2.cvtColor(finished, cv2.COLOR_RGB2BGR))
        rows[path.stem] = {"marks": marks, "seconds": round(time.time() - began, 1)}
        print("%-40s %2d marks  %.1fs" % (path.stem, len(marks), time.time() - began),
              file=sys.stderr, flush=True)
    print(json.dumps(rows, indent=1))


main()
