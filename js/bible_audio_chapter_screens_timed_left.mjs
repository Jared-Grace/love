import { arguments_assert } from "./arguments_assert.mjs";
import { each_index } from "./each_index.mjs";
import { list_size } from "./list_size.mjs";
export function bible_audio_chapter_screens_timed_left(
  lines,
  line_each,
  pieces,
) {
  arguments_assert(arguments, 3);
  each_index(lines, line_each);
  let left = list_size(pieces);
  return left;
}
