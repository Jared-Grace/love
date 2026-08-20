import { command_line } from "./command_line.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ffmpeg_crop_write(path_from, box, path_to) {
  "cut a rectangle out of a picture and save what is inside it as a new picture, leaving the picture it was cut from untouched";
  "it writes somewhere new rather than over the picture it read, because a program that reads and writes the same file at once has already destroyed the thing it is halfway through reading. Putting the new picture back where the old one was is a separate move, done once this has finished.";
  "it says yes in advance to overwriting, because the alternative is worse than an overwrite: ffmpeg asks the question on the terminal and waits for an answer, and nothing here is ever going to answer, so a file already in the way would stop the run forever rather than fail it";
  "it says one frame and one update because a still picture handed to a tool built for film is otherwise taken for the first of a numbered series";
  let quoted_from = text_combine_multiple(['"', path_from, '"']);
  let quoted_to = text_combine_multiple(['"', path_to, '"']);
  let command = text_combine_multiple([
    "ffmpeg -hide_banner -loglevel error -y -i ",
    quoted_from,
    " -vf crop=",
    box,
    " -frames:v 1 -update 1 ",
    quoted_to,
  ]);
  let ran = await command_line(command);
  return ran;
}
