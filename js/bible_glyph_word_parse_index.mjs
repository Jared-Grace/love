import { arguments_assert } from "./arguments_assert.mjs";
export function bible_glyph_word_parse_index() {
  arguments_assert(arguments, 0);
  let inside = false;
  let index = 0;
  let r = {
    inside,
    index,
  };
  return r;
}
