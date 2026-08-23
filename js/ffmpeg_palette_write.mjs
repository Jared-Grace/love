import { command_line } from "./command_line.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ffmpeg_palette_write(path_from, colors_most, path_to) {
  "$plain path_from";
  "$plain colors_most";
  "$plain path_to";
  "read a picture, work out the few colours it is mostly made of, redraw it in only those, and save that as a new picture";
  "IT IS FOR FLAT PICTURES AND NOT FOR PHOTOGRAPHS. A drawing made of plain areas of colour is genuinely a handful of colours, so naming them costs it nothing and everything between them was never wanted: a picture of thirty-two flat panes measured three hundred and sixty kilobytes and came out of this at forty-eight, and the panes were flatter afterwards than before. A photograph put through the same thing would band.";
  "SHRINKING THE PICTURE IS THE WRONG FIX AND WAS MEASURED TO BE. The weight of a drawing like that is not its size but the faint noise the drawing left over every flat area, and shrinking keeps the noise while throwing away the edges: the same picture reduced to six hundred and forty across came out larger than the full-size original written losslessly. Naming the colours removes the noise itself, which is why it wins by a factor and the other loses.";
  "IT SCATTERS NOTHING. Left to itself the redraw dithers - it speckles two named colours together to fake an unnamed one - which is exactly the noise this was for, so it is turned off. On a flat picture there is nothing to fake.";
  "BOTH PASSES ARE ONE RUN, the colours worked out and the picture redrawn in a single invocation, with the picture read once and sent down both. Written as two runs it would have to leave the list of colours somewhere on disk between them, and that file would be a thing to name, to clean up, and to collide over when two of these run at once.";
  "it writes somewhere new rather than over the picture it read, because a program that reads and writes the same file at once has already destroyed the thing it is halfway through reading";
  "it says yes in advance to overwriting, because ffmpeg otherwise asks that question on the terminal and waits for an answer that is never coming";
  "it says one frame and one update because a still picture handed to a tool built for film is otherwise taken for the first of a numbered series";
  let quoted_from = text_combine_multiple(['"', path_from, '"']);
  let quoted_to = text_combine_multiple(['"', path_to, '"']);
  let filters = text_combine_multiple([
    '"[0:v]split[a][b];[a]palettegen=max_colors=',
    colors_most,
    ':stats_mode=full[p];[b][p]paletteuse=dither=none"',
  ]);
  let command = text_combine_multiple([
    "ffmpeg -hide_banner -loglevel error -y -i ",
    quoted_from,
    " -filter_complex ",
    filters,
    " -frames:v 1 -update 1 ",
    quoted_to,
  ]);
  let ran = await command_line(command);
  return ran;
}
