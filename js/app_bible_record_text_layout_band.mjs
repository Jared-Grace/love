import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { app_bible_record_text_lines } from "./app_bible_record_text_lines.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
export function app_bible_record_text_layout_band(ctx, width, text, band) {
  "$plain ctx width text band";
  "The passage's words laid out to fill a band of fixed height band across the top of the frame (human 2026-11-24: the letter size adjusts so the overlay is always the same size, and the overlay is 40% of the height). The band never changes; the letters do: they start as tall as the band and shrink a fiftieth at a time until the reference and every line fit inside the band and inside the width, so the words take all the room there is (human 2026-11-24: a gap at the bottom of the overlay). Same shape of answer as the layout under a picture, so the app paints either the same way.";
  "EVERY WORD ALWAYS FITS: there is no smallest size, because a word cut off the video is worse than small letters. REJECTED: capping the letters at an eighth of the frame's width so a short passage keeps several words per line - it left the band's foot empty, which the human asked to fill.";
  arguments_assert(arguments, 4);
  let margin = multiply(width, 0.05);
  let right = multiply(margin, 2);
  let room = subtract(width, right);
  let size = band;
  let lines = app_bible_record_text_lines(ctx, text, size, room);
  function tall() {
    let left = multiply(size, 0.7);
    let left2 = multiply(lines.length, size);
    let width_most =
      margin +
      multiply(left, 1.4) +
      multiply(left2, 1.25) +
      multiply(margin, 0.5);
    return width_most;
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
    size = multiply(size, 0.98);
    lines = app_bible_record_text_lines(ctx, text, size, room);
  }
  ("WHAT IS LEFT OVER GOES BETWEEN THE LINES (human 2026-11-24: a gap at the bottom of the overlay; the words should take up all the space): the next size up would not fit, often because it needs one more line, so the gap left can be most of a line tall. Spreading it evenly between the lines puts the last line at the band's foot.");
  let right2 = tall();
  let left_over = subtract(band, right2);
  let line_height = multiply(size, 1.25) + divide(left_over, lines.length);
  let r = {
    margin,
    size,
    lines,
    reference_size: multiply(size, 0.7),
    line_height,
    band,
  };
  return r;
}
