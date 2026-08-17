import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_word_parse_index } from "./bible_glyph_word_parse_index.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_word_parse_inside() {
  arguments_assert(arguments, 0);
  let r2 = bible_glyph_word_parse_index();
  let index = property_get(r2, "index");
  let inside = property_get(r2, "inside");
  let r = {
    index,
    inside,
  };
  return r;
}
