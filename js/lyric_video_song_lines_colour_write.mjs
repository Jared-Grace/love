import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_lit_colours } from "./lyric_video_lit_colours.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_size } from "./list_size.mjs";
import { math_max } from "./math_max.mjs";
import { math_min } from "./math_min.mjs";
import { add } from "./add.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_song_lines_colour_write(
  name,
  line_from,
  line_to,
  colour,
) {
  "$plain name";
  "$plain line_from";
  "$plain line_to";
  "$plain colour";
  "Writes one lit colour onto a run of a song's sung lines, from the first named to the last named and taking both, and answers which lines it wrote.";
  "★ IT TAKES A RUN AND NOT ONE LINE, BECAUSE A COLOUR IS A FACT ABOUT A SECTION. What decides the colour is what the song is saying - the cross, the grave, the rising - and a song says each of those over several lines together. Written one line at a time, a section of eight would be eight commands, and the record afterwards would not say anywhere that they were one decision.";
  "★ THE COLOUR IS CHECKED AGAINST THE NAMED COLOURS BEFORE ANYTHING IS WRITTEN. A name nothing answers to would otherwise sit in the document until somebody rendered the song, and the render would stop rather than the writing - which puts the complaint a long way from the mistake.";
  "A run reaching past the last line is cut to the lines there are rather than refused, and what came back says how many were written, so a run named too long is visible without being an error.";
  arguments_assert(arguments, 4);
  let colours = lyric_video_lit_colours();
  property_get(colours, colour);
  let folder = lyric_video_songs_folder();
  let file_name = name + ".json";
  let path_document = path_join([folder, file_name]);
  let document = await file_read_json(path_document);
  let lines = document.lines;
  let size = list_size(lines);
  let a = Number(line_from);
  let first = math_max(a, 0);
  let a2 = Number(line_to);
  let b = add(size, -1);
  let last = math_min(a2, b);
  let written = [];
  let at = first;
  while (not(less_than(last, at))) {
    let line = lines[at];
    line.colour = colour;
    list_add(written, line.text);
    at = add(at, 1);
  }
  await file_overwrite_json(path_document, document);
  let r = {
    path_document,
    colour,
    lines: written,
  };
  return r;
}
