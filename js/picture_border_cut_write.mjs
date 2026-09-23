import { round } from "./round.mjs";
import { floor } from "./floor.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { picture_size } from "./picture_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { command_line } from "./command_line.mjs";
export async function picture_border_cut_write(
  path_from,
  path_to,
  fraction_edge,
) {
  "$plain path_from";
  "$plain path_to";
  "$plain fraction_edge";
  "Cuts the same fraction off all four edges of a picture and writes what is left.";
  "★ IT EXISTS BECAUSE A MUSEUM PHOTOGRAPH OFTEN INCLUDES THE PICTURE FRAME. The painting is public domain and large enough, but the photograph was taken of the framed canvas, so a strip of carved gilt runs along every edge and lands inside the finished video. Choosing a different file usually means choosing a smaller one, and the frame is a fixed proportion of the edge, so cutting it away first and then shaping what is left keeps the big file and loses only the frame.";
  "The fraction is of each side separately, so it is taken off the width twice and off the height twice, and a tenth leaves four fifths of each dimension rather than nine tenths.";
  "The kept rectangle is trimmed to an even number of pixels on both sides, for the same reason every crop here is: half the formats a picture can be saved in store their colour at half resolution and refuse an odd side.";
  "It says yes to overwriting in advance, because the film tool asks that question on the terminal and nothing here is ever going to answer it.";
  arguments_assert(arguments, 3);
  let fraction = Number(fraction_edge);
  let size = await picture_size(path_from);
  let n = multiply(size.width, fraction);
  let at_across = round(n);
  let n2 = multiply(size.height, fraction);
  let at_down = round(n2);
  let right = multiply(at_across, 2);
  let top = subtract(size.width, right);
  let p = divide(top, 2);
  let left = floor(p);
  let kept_across = multiply(left, 2);
  let right2 = multiply(at_down, 2);
  let top2 = subtract(size.height, right2);
  let p2 = divide(top2, 2);
  let left2 = floor(p2);
  let kept_down = multiply(left2, 2);
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
