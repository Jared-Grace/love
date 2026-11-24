import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { app_bible_record_text_lines } from "./app_bible_record_text_lines.mjs";
import { greater_than } from "./greater_than.mjs";
export function app_bible_record_text_layout_band(ctx, width, text, band) {
  "$plain ctx width text band";
  "The passage's words laid out to fill a band of fixed height band across the top of the frame (human 2026-11-24: the letter size adjusts so the overlay is always the same size, and the overlay is 40% of the height). The band never changes; the letters do: they start at the largest size worth reading - an eighth of the frame's width, past which a line holds too few words to read smoothly - and shrink a tenth at a time until the reference and every line fit inside the band and inside the width. Same shape of answer as the layout under a picture, so the app paints either the same way.";
  "EVERY WORD ALWAYS FITS: there is no smallest size, because a word cut off the video is worse than small letters. A short passage may not fill the band at the largest size; it then leaves the band's foot empty rather than growing letters too big to read in lines.";
  arguments_assert(arguments, 4);
  let margin = multiply(width, 0.05);
  let right = multiply(margin, 2);
  let room = subtract(width, right);
  let size = divide(width, 8);
  let lines = app_bible_record_text_lines(ctx, text, size, room);
  function tall() {
    let left = multiply(size, 0.7);
    let left2 = multiply(lines.length, size);
    let r =
      margin +
      multiply(left, 1.4) +
      multiply(left2, 1.25) +
      multiply(margin, 0.5);
    return r;
  }
  function widest() {
    function lambda(line) {
      let r2 = ctx.measureText(line).width;
      return r2;
    }
    let widths = lines.map(lambda);
    let r3 = Math.max(...widths);
    return r3;
  }
  while (greater_than(tall(), band) || greater_than(widest(), room)) {
    size = multiply(size, 0.9);
    lines = app_bible_record_text_lines(ctx, text, size, room);
  }
  let r = {
    margin,
    size,
    lines,
    reference_size: multiply(size, 0.7),
    line_height: multiply(size, 1.25),
    band,
  };
  return r;
}
