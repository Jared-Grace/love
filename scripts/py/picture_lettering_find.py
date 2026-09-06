"""Report every piece of lettering EasyOCR can find in each picture of a folder.

Written for lyric-video grounds, which are painted backdrops with the song's
words laid over them afterwards, so any lettering the image model drew of its own
accord has to come out before the ground can be used.

Reports rather than judges. It prints every candidate the detector will admit,
however faint, together with where it sits and how sure it is - so that the
threshold separating "this picture has words in it" from "this one does not" can
be read off a labelled corpus instead of being asserted in advance.

Measured 2026-09-06 on thirteen Psalm 148 grounds drawn by fal-ai/z-image/base
under a negative prompt, labelled by diffing the raw draws against the repaired
copies: seven lettered, six clean. **Seven of seven detected, zero of six clean
frames marked.** No threshold tuning was needed - "any mark at all" separated
them, top confidences on the positives running 0.087 to 0.755. Every caption box
fell at y 584..1227 of 2048, which is inside the band the lyric lines occupy: the
model writes its captions exactly where the words go.

Its limit is the reason picture_lettering_residue.py exists. This finds things
shaped like readable words. Run over the *repaired* copies it missed the two
white dashes left in ocean_depths, because a dash is not a letter, and it read a
crown's fleur-de-lis as a "U". So the check on a repair is not this one.

Usage: python picture_lettering_find.py <folder> [<folder> ...]
"""

import json
import sys
import time
from pathlib import Path

import easyocr


def main():
    reader = easyocr.Reader(["en"], gpu=False, verbose=False)
    out = {}
    for folder_name in sys.argv[1:]:
        folder = Path(folder_name)
        rows = {}
        for path in sorted(folder.glob("*.png")):
            began = time.time()
            # low_text/text_threshold pushed down so faint marks still surface;
            # the cut is chosen later, from the numbers, not here.
            found = reader.readtext(
                str(path),
                text_threshold=0.3,
                low_text=0.2,
                link_threshold=0.3,
            )
            marks = []
            for box, text, confidence in found:
                xs = [int(p[0]) for p in box]
                ys = [int(p[1]) for p in box]
                marks.append(
                    {
                        "text": text,
                        "confidence": round(float(confidence), 4),
                        "x": min(xs),
                        "y": min(ys),
                        "w": max(xs) - min(xs),
                        "h": max(ys) - min(ys),
                    }
                )
            marks.sort(key=lambda m: -m["confidence"])
            rows[path.stem] = {
                "marks": marks,
                "lettering": len(marks) > 0,
                "seconds": round(time.time() - began, 1),
            }
            print(
                "%-40s %2d marks  %.1fs" % (path.stem, len(marks), time.time() - began),
                file=sys.stderr,
                flush=True,
            )
        out[folder.name] = rows
    print(json.dumps(out, indent=1))


main()
