import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
export function bible_glyph_chapters_table_behind_bible_glyph_chapters_table_behind_absent(
  used,
  glyph,
) {
  arguments_assert(arguments, 2);
  ("whether an authored chapter is missing any name of one seated picture, so that it cannot be drawing that picture anywhere.");
  let names = bible_glyph_group_names(glyph);
  for (let name of names) {
    let held = property_exists(used, name);
    if (not(held)) {
      let v = true;
      return v;
    }
  }
  let v2 = false;
  return v2;
}
