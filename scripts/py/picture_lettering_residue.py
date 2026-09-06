"""Did the repair leave any of the lettering behind?

The second half of the check picture_lettering_find.py starts. That one asks an
OCR model whether a picture has words in it, and on freshly drawn grounds it is
exact - seven of seven lettered found, zero of six clean frames marked. Run over
the *repaired* copies it is wrong in both directions at once: it missed the two
white dashes still standing in ocean_depths, because a dash is not a letter, and
it read the crown's fleur-de-lis in crown_and_staff as a "U". A reading that
finds letter shapes cannot see the wreckage of a letter.

Three things measured on the way to the rule here, each of which killed a simpler
version of it:

1. **Scope is what makes this tractable.** The surviving dashes are 15 and 17
   pixels wide, so any width floor loose enough to catch them, applied to the
   whole 1152x2048 frame, also catches a hundred brush edges. But residue can
   only be where the repair worked, and subtracting the raw draw from the
   repaired copy names that rectangle exactly. Inside it a 15px bright run is a
   fragment of a letter; the same run in open sky is paint. Scoping is also what
   removes the "U": it sits at y=1224, and crown_and_staff's repair rectangle is
   y 940..1085, so no check confined to the rectangle can reach it.

2. **Residue is not the pixels the repair left alone.** That was the obvious
   definition and it is false. LaMa repaints the whole masked area, so a stroke
   it failed to remove is a stroke it *redrew* - every pixel of it differs from
   the raw draw. Restricting to unchanged pixels scored zero on the one frame
   that genuinely has residue.

3. **The rectangle must not be padded.** A 24px margin around it admitted the
   flame above the altar in horn_on_the_altar and its stone courses - six marks
   of aspect 6.8 to 36, all of them painting, none of them inside the rectangle.
   With no margin, horn_on_the_altar reports nothing at all.

What is left is one number: how many times longer than thick the brightest thin
run inside the rectangle is. Painted detail there - a crown's uprights, a lit
wave edge - is as tall as it is wide or taller. Lettering is not.

**The honest state of the threshold.** Across the thirteen frames the maxima are:
ocean_depths 8.5 (the two real dashes, 8.5 and 7.5), crown_and_staff 5.5, and
every other frame at or below 1.4. So `>= 4` catches the residue and costs one
false flag; `>= 6` would separate this corpus perfectly, and that is exactly why
it is not used - the corpus holds **one** frame with residue in it, so a cut
drawn to fit it is fitted to a single example. `>= 4` is the loose end of the
gap, chosen because the two errors cost different amounts: a false flag costs one
glance at one picture, a miss ships lettering into a video.

Usage: python picture_lettering_residue.py <raw_folder> <repaired_folder>
"""

import json
import sys
from pathlib import Path

import cv2
import numpy as np

CHANGED = 8  # grey levels; below this the repair did not touch the pixel
CUT = 40  # top-hat response a stroke has to clear to count as a mark
ASPECT = 4  # length over thickness at which a run stops being paint


def repair_box(raw, fixed):
    ys, xs = np.nonzero(cv2.absdiff(raw, fixed) > CHANGED)
    if len(xs) == 0:
        return None
    return (int(xs.min()), int(xs.max()) + 1, int(ys.min()), int(ys.max()) + 1)


def residue(raw, fixed):
    box = repair_box(raw, fixed)
    if box is None:
        return {"box": None, "lettering": False, "aspect_max": 0, "marks": []}
    x0, x1, y0, y1 = box
    band = fixed[y0:y1, x0:x1]

    # Thin bright horizontal structure: what a long flat opening cannot hold, so
    # subtracting it away keeps a letter stroke and discards the scenery. The
    # kernel is wider than a stroke and far narrower than anything painted.
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (41, 1))
    hat = cv2.morphologyEx(band, cv2.MORPH_TOPHAT, kernel)
    _, mask = cv2.threshold(hat, CUT, 255, cv2.THRESH_BINARY)

    count, _, stats, _ = cv2.connectedComponentsWithStats(mask, 8)
    marks = []
    for i in range(1, count):
        x, y, w, h, area = stats[i]
        if area < 10:
            continue
        piece = mask[y : y + h, x : x + w] > 0
        marks.append(
            {
                "x": int(x + x0),
                "y": int(y + y0),
                "w": int(w),
                "h": int(h),
                "area": int(area),
                "aspect": round(float(w / max(h, 1)), 1),
                "hat": round(float(hat[y : y + h, x : x + w][piece].mean()), 1),
                "bright": round(float(band[y : y + h, x : x + w][piece].mean()), 1),
            }
        )
    marks.sort(key=lambda m: -m["aspect"])
    return {
        "box": [x0, x1, y0, y1],
        "band_mean": round(float(band.mean()), 1),
        "lettering": any(m["aspect"] >= ASPECT for m in marks),
        # Over every mark, never over the printed few: sorting by response and
        # keeping the top twelve hid crown_and_staff's 5.5 and made the gap look
        # twice as wide as it is.
        "aspect_max": max([m["aspect"] for m in marks], default=0),
        "marks": marks[:12],
        "marks_total": len(marks),
    }


def main():
    raw_folder = Path(sys.argv[1])
    fixed_folder = Path(sys.argv[2])
    out = {}
    for path in sorted(fixed_folder.glob("*.png")):
        raw = cv2.imread(str(raw_folder / path.name), cv2.IMREAD_GRAYSCALE)
        fixed = cv2.imread(str(path), cv2.IMREAD_GRAYSCALE)
        row = residue(raw, fixed)
        out[path.stem] = row
        print(
            "%-24s %-26s %3d marks  aspect_max %5.1f  %s"
            % (
                path.stem,
                row["box"],
                row["marks_total"] if "marks_total" in row else 0,
                row["aspect_max"],
                "LETTERING" if row["lettering"] else "clean",
            ),
            file=sys.stderr,
            flush=True,
        )
    print(json.dumps(out, indent=1))


main()
