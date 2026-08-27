import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line } from "./command_line.mjs";
export async function ffmpeg_black_box_write(path_from, box, path_to) {
  "paint one filled black rectangle over a picture and save the result as a new picture, leaving the picture it read untouched";
  "it is the other half of the pair that already cuts a rectangle out of a picture, and it exists for the same reason: a drawing that came back almost right needs a small part of it taken away, and asking for the whole picture again spends a draw and usually loses the part that was right";
  "black is what it paints because these pictures stand on a black ground, so a rectangle of it reads as the picture ending there rather than as a mark laid over it";
  "the rectangle is given in the tool's own words rather than as four numbers, so that a caller may say a share of the height rather than a count of pixels and never has to measure the picture first";
  "it writes somewhere new rather than over the picture it read, because a program that reads and writes the same file at once has already destroyed the thing it is halfway through reading";
  let quoted_from = text_combine_multiple(['"', path_from, '"']);
  let quoted_to = text_combine_multiple(['"', path_to, '"']);
  let command = text_combine_multiple([
    "ffmpeg -hide_banner -loglevel error -y -i ",
    quoted_from,
    " -vf drawbox=",
    box,
    ":color=black:t=fill -frames:v 1 -update 1 ",
    quoted_to,
  ]);
  let ran = await command_line(command);
  return ran;
}
