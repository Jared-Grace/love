import { arguments_assert } from "./arguments_assert.mjs";
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
  "Takes the largest rectangle of a wanted shape that will fit inside a picture, chosen by where in the picture it is to sit, and writes it out at exactly the wanted size.";
  "★ IT EXISTS BECAUSE A PAINTING IS THE WRONG SHAPE AND THE PART TO KEEP IS A JUDGMENT. Almost every painting worth reusing is wider than it is tall, and these videos are far taller than they are wide, so most of a painting is going to be thrown away. Which part is thrown away decides whether the picture still shows what it was chosen for - a centre cut of a crucifixion keeps the cross and a centre cut of a harvest field keeps a hedge. So the position is handed in as two fractions rather than guessed at here, and the guessing is left to whoever looked at the painting.";
  "★ THE FRACTIONS ARE OF THE SLACK, NOT OF THE PICTURE, which is what makes nothing at all mean the left edge and one mean the right edge whatever the shape of what came in. A fraction of the picture's own width would run the rectangle off the end of anything but a square.";
  "★ THE CUT AND THE SIZING ARE ONE PASS. Cutting to a file and then scaling that file is two rounds of losing detail and one temporary picture that somebody has to remember to delete; ffmpeg does both in the filter chain and writes once.";
  "It says yes to overwriting in advance, for the reason every writer here does: ffmpeg asks the question on the terminal and nothing in this house is ever going to answer it, so a file already in the way would hang the run rather than fail it.";
  arguments_assert(arguments, 6);
  let v = String(width);
  let v2 = String(height);
  let shape_across = text_combine_multiple([v, "/", v2]);
  let v3 = String(height);
  let v4 = String(width);
  let shape_down = text_combine_multiple([v3, "/", v4]);
  let kept_across = text_combine_multiple(["min(iw,ih*", shape_across, ")"]);
  let kept_down = text_combine_multiple(["min(ih,iw*", shape_down, ")"]);
  let v5 = String(fraction_across);
  let at_across = text_combine_multiple(["(iw-", kept_across, ")*", v5]);
  let v6 = String(fraction_down);
  let at_down = text_combine_multiple(["(ih-", kept_down, ")*", v6]);
  let v7 = String(width);
  let v8 = String(height);
  let filter = text_combine_multiple([
    "crop=",
    kept_across,
    ":",
    kept_down,
    ":",
    at_across,
    ":",
    at_down,
    ",scale=",
    v7,
    ":",
    v8,
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
  let ran = await command_line(command);
  return ran;
}
