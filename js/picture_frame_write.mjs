import { math_min } from "./math_min.mjs";
import { floor } from "./floor.mjs";
import { round } from "./round.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { picture_size } from "./picture_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { command_line } from "./command_line.mjs";
export async function picture_frame_write(
  path_from,
  path_to,
  width,
  height,
  fraction_across,
  fraction_down,
) {
  "$plain path_from";
  "$plain path_to";
  "$plain width";
  "$plain height";
  "$plain fraction_across";
  "$plain fraction_down";
  "Takes the largest rectangle of a wanted shape that will fit inside a picture, placed by where in the picture it is to sit, and writes it out at exactly the wanted size.";
  "★ IT EXISTS BECAUSE A PAINTING IS THE WRONG SHAPE AND THE PART TO KEEP IS A JUDGMENT. Almost every painting worth reusing is wider than it is tall, and these videos are far taller than they are wide, so most of a painting is going to be thrown away. Which part is thrown away decides whether the picture still shows what it was chosen for - a middle cut of a crucifixion keeps the cross, and a middle cut of a harvest field keeps a hedge. So the position is handed in as two fractions rather than worked out here, and the judging is left to whoever looked at the painting.";
  "★ THE FRACTIONS ARE OF THE SLACK, NOT OF THE PICTURE, which is what makes nothing mean flush against one edge and one mean flush against the other, whatever shape came in. A fraction of the picture's own width would run the rectangle off the end of anything but a square.";
  "★ THE RECTANGLE IS WORKED OUT HERE AND HANDED OVER AS FOUR PLAIN NUMBERS, WHICH IS NOT THE OBVIOUS WAY ROUND. The film tool can work a crop out for itself from an expression naming the picture's own width, and that expression needs brackets and a star in it - and the runner here refuses brackets, stars and every other shell operator outright, because a command line that may hold them is a command line that may hold anything. So the picture is measured first and the arithmetic is done in the open, where it can be read.";
  "The rectangle is trimmed to an even number of pixels on both sides, because half the formats a picture can be saved in store their colour at half resolution and refuse an odd side outright.";
  "It says yes to overwriting in advance, for the reason every writer here does: the film tool asks the question on the terminal and nothing in this house is ever going to answer it, so a file already in the way would hang the run rather than fail it.";
  arguments_assert(arguments, 6);
  let want_across = Number(width);
  let want_down = Number(height);
  let across = Number(fraction_across);
  let down = Number(fraction_down);
  let size = await picture_size(path_from);
  let top = multiply(size.height, want_across);
  let b = divide(top, want_down);
  let fit_across = math_min(size.width, b);
  let top2 = multiply(size.width, want_down);
  let b2 = divide(top2, want_across);
  let fit_down = math_min(size.height, b2);
  let p = divide(fit_across, 2);
  let left = floor(p);
  let kept_across = multiply(left, 2);
  let p2 = divide(fit_down, 2);
  let left2 = floor(p2);
  let kept_down = multiply(left2, 2);
  let left3 = subtract(size.width, kept_across);
  let n = multiply(left3, across);
  let at_across = round(n);
  let left4 = subtract(size.height, kept_down);
  let n2 = multiply(left4, down);
  let at_down = round(n2);
  let v = String(kept_across);
  let v2 = String(kept_down);
  let v3 = String(at_across);
  let v4 = String(at_down);
  let v5 = String(want_across);
  let v6 = String(want_down);
  let filter = text_combine_multiple([
    "crop=",
    v,
    ":",
    v2,
    ":",
    v3,
    ":",
    v4,
    ",scale=",
    v5,
    ":",
    v6,
    ":flags=lanczos",
  ]);
  let folder = await path_dirname(path_to);
  await folder_exists_ensure(folder);
  let command = text_combine_multiple([
    'ffmpeg -hide_banner -loglevel error -y -i "',
    path_from,
    '" -vf "',
    filter,
    '" -frames:v 1 -update 1 "',
    path_to,
    '"',
  ]);
  await command_line(command);
  let r = {
    path_to,
    crop: filter,
    from: size,
  };
  return r;
}
