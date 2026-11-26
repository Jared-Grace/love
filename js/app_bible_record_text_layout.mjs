import { app_bible_record_text_layout_first_room } from "./app_bible_record_text_layout_first_room.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { app_bible_record_text_lines } from "./app_bible_record_text_lines.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
export function app_bible_record_text_layout(ctx, width, height, text, below) {
  "$plain ctx width height text below";
  "How the passage's words will be laid out on a frame, worked out without drawing anything: the letter size, the lines they wrap into, and how tall the band holding them and the reference comes out. Kept apart from the drawing so the picture can be given exactly the room the words leave (human 2026-11-23: the words did not fill the space under the picture, and the picture was less than half the frame).";
  "A long passage shrinks its letters until it fits under the picture, or in the lower half if that is more; a short one stays large enough to read on a phone.";
  arguments_assert(arguments, 5);
  let margin = multiply(width, 0.05);
  let right = multiply(margin, 2);
  let room = subtract(width, right);
  let size = divide(width, 16);
  let lines = [];
  function wrap() {
    lines = app_bible_record_text_lines(ctx, text, size, room);
  }
  wrap();
  let under = subtract(height, below);
  ("THE WORDS GROW TO FILL THE ROOM UNDER THE PICTURE (human 2026-11-23: text doesn't fill space below), a tenth at a time, and stop at the last size whose band still fits under it with every line inside the width - up to an eighth of the frame's width, past which a line holds too few words to read smoothly. A picture filling the whole frame leaves no room under it, so the first step already fails and the letters stay as they were.");
  function tall() {
    let left = multiply(size, 0.7);
    let left2 = multiply(lines.length, size);
    let r3 =
      margin +
      multiply(left, 1.4) +
      multiply(left2, 1.25) +
      multiply(margin, 0.5);
    return r3;
  }
  while (less_than(size, divide(width, 8))) {
    let before = size;
    size = multiply(size, 1.1);
    wrap();
    let a = tall();
    if (greater_than(a, under) || greater_than(widest(), room)) {
      size = before;
      wrap();
      break;
    }
  }
  let first_room = app_bible_record_text_layout_first_room(
    height,
    margin,
    under,
  );
  while (
    greater_than(multiply(multiply(lines.length, size), 1.25), first_room) &&
    greater_than(size, divide(width, 40))
  ) {
    size = multiply(size, 0.9);
    wrap();
  }
  ("EVERY WORD ALWAYS FITS (asked for by the human 2026-11-22). If the room under the picture and the reading floor above could not hold it, the passage may take the whole frame and the letters keep shrinking with no floor until it is all inside - a word cut off the video is worse than small letters, because the recording is of reading the whole passage aloud. Width is checked too: a single word wider than a line cannot be wrapped, only shrunk.");
  function widest() {
    function lambda(line) {
      let r2 = ctx.measureText(line).width;
      return r2;
    }
    let widths = lines.map(lambda);
    let width_most = Math.max(...widths);
    return width_most;
  }
  while (
    greater_than(
      multiply(multiply(lines.length, size), 1.25),
      multiply(height, 0.85),
    ) ||
    greater_than(widest(), room)
  ) {
    size = multiply(size, 0.9);
    wrap();
  }
  let reference_size = multiply(size, 0.7);
  let line_height = multiply(size, 1.25);
  let band =
    margin +
    multiply(reference_size, 1.4) +
    multiply(lines.length, line_height) +
    multiply(margin, 0.5);
  let layout = {
    margin,
    size,
    lines,
    reference_size,
    line_height,
    band,
  };
  return layout;
}
