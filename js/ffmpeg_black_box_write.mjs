import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line } from "./command_line.mjs";
export async function ffmpeg_black_box_write(path_from, box, path_to) {
  "paint one filled black rectangle over a picture and save the result as a new picture, leaving the picture it read untouched";
  "it is the other half of the pair that already cuts a rectangle out of a picture, and it exists for the same reason: a drawing that came back almost right needs a small part of it taken away, and asking for the whole picture again spends a draw and usually loses the part that was right";
  "black is what it paints because these pictures stand on a black ground, so a rectangle of it reads as the picture ending there rather than as a mark laid over it";
  "the rectangle is given in the tool's own words rather than as four numbers, so that a caller may say a share of the height rather than a count of pixels and never has to measure the picture first";
  "it writes somewhere new rather than over the picture it read, because a program that reads and writes the same file at once has already destroyed the thing it is halfway through reading";
  ("IT CARRIES THE CONTENT CREDENTIALS OVER, because ffmpeg keeps no chunk it has no use for and the terms these pictures are drawn under forbid dropping them. It is done here rather than asked of the caller because a caller that has to remember is a caller that forgets - measured: all three callers of these writers had, and the loss showed up nowhere, since a picture that never carried them and a picture stripped of them are the same file.");
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
  await image_content_credentials_copy(path_from, path_to);
  return ran;
}
