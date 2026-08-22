import { arguments_assert } from "./arguments_assert.mjs";
import { property_equals } from "./property_equals.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_chapters_table_behind_because(
  deliberate_rows,
  chapter_code,
  glyph,
) {
  arguments_assert(arguments, 3);
  ("the reason one chapter leaves one seated picture in English on purpose, or nothing at all when no such decision has been written.");
  for (let row of deliberate_rows) {
    let same_chapter = property_equals(row, "chapter_code", chapter_code);
    if (not(same_chapter)) {
      continue;
    }
    let same_glyph = property_equals(row, "glyph", glyph);
    if (not(same_glyph)) {
      continue;
    }
    let v = property_get(row, "because");
    return v;
  }
  let v2 = null;
  return v2;
}
