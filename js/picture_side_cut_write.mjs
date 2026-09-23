import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { modulo } from "./modulo.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { picture_size } from "./picture_size.mjs";
import { round } from "./round.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { command_line } from "./command_line.mjs";
export async function picture_side_cut_write(
  path_from,
  path_to,
  fraction_left,
  fraction_right,
  fraction_top,
  fraction_bottom,
) {
  "$plain path_from";
  "$plain path_to";
  "$plain fraction_left";
  "$plain fraction_right";
  "$plain fraction_top";
  "$plain fraction_bottom";
  "Cuts a named fraction off each of the four edges of a picture separately and writes what is left.";
  "★ IT EXISTS BECAUSE THE SUBJECT OF A PAINTING IS ALMOST NEVER IN THE MIDDLE OF IT. Cutting the same amount off every edge, which is the only cut there was before this, moves nothing: a cross standing near the foot of a square canvas is still near the foot of the smaller square, and shaping that to a tall frame then clips the figure kneeling under it. What was wanted was to take a band off one edge only, so that what is left has the subject where a tall frame will keep it.";
  "Each fraction is of that one side, so a tenth off the top takes a tenth of the height and leaves nine tenths, unlike the four-edged cut where a tenth leaves four fifths.";
  "The kept rectangle is trimmed to an even number of pixels on both sides, for the same reason every crop here is: half the formats a picture can be saved in store their colour at half resolution and refuse an odd side.";
  "It says yes to overwriting in advance, because the film tool asks that question on the terminal and nothing here is ever going to answer it.";
  arguments_assert(arguments, 6);
  let size = await picture_size(path_from);
  let right = Number(fraction_left);
  let n = multiply(size.width, right);
  let at_across = round(n);
  let right2 = Number(fraction_right);
  let n2 = multiply(size.width, right2);
  let cut_right = round(n2);
  let left = subtract(size.width, at_across);
  let across = subtract(left, cut_right);
  let right3 = modulo(across, 2);
  let kept_across = subtract(across, right3);
  let right4 = Number(fraction_top);
  let n3 = multiply(size.height, right4);
  let at_down = round(n3);
  let right5 = Number(fraction_bottom);
  let n4 = multiply(size.height, right5);
  let cut_bottom = round(n4);
  let left2 = subtract(size.height, at_down);
  let down = subtract(left2, cut_bottom);
  let right6 = modulo(down, 2);
  let kept_down = subtract(down, right6);
  let v = String(kept_across);
  let v2 = String(kept_down);
  let v3 = String(at_across);
  let v4 = String(at_down);
  let filter = text_combine_multiple(["crop=", v, ":", v2, ":", v3, ":", v4]);
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
