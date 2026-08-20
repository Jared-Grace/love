import { command_line } from "./command_line.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ffmpeg_crop_box(path) {
  "look at a picture and answer the smallest rectangle that still holds everything in it that is not black, written the way ffmpeg wants a crop written - width, height, then how far in from the left and down from the top; and answer null when there is nothing to find";
  "it asks ffmpeg rather than reading the pixels here because ffmpeg is the only picture tool on this machine - there is no ImageMagick and no sharp - and a bounding box read a pixel at a time in JavaScript would be a decoder written from nothing to save one process";
  "it loops the still picture and asks for four frames of it, which looks like waste and is not. cropdetect ignores the first two frames it is given, so a single-frame picture is measured zero times and answers nothing at all - the run comes back clean and empty and looks exactly like a picture with no edge in it. Looping is how a still is made long enough to be looked at.";
  "the report is read off the error channel rather than the output channel because that is where ffmpeg says everything it has to say about what it saw; the output channel is for the picture itself, and here the picture is thrown away";
  "the last report is the one kept. Each frame is reported separately and the box only ever grows, so the last line is the one that has seen every frame.";
  let quoted = text_combine_multiple(['"', path, '"']);
  let command = text_combine_multiple([
    "ffmpeg -hide_banner -loglevel info -loop 1 -i ",
    quoted,
    " -vf cropdetect=limit=8:round=2 -frames:v 4 -f null -",
  ]);
  let ran = await command_line(command);
  let said = ran.stderr;
  let found = said.match(/crop=\d+:\d+:\d+:\d+/g);
  if (!found) {
    return null;
  }
  let last = found[found.length - 1];
  let box = last.slice("crop=".length);
  return box;
}
