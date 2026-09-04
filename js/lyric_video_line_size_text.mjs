import { arguments_assert } from "./arguments_assert.mjs";
import { text_size } from "./text_size.mjs";
import { lyric_video_line_font_size } from "./lyric_video_line_font_size.mjs";
import { equal } from "./equal.mjs";
export function lyric_video_line_size_text(line, font_size, characters_max) {
  arguments_assert(arguments, 3);
  let characters = text_size(line.text);
  let size = lyric_video_line_font_size(font_size, characters_max, characters);
  let unchanged = equal(size, font_size);
  if (unchanged) {
    let none = "";
    return none;
  }
  let asked = "\\fs" + size;
  return asked;
}
