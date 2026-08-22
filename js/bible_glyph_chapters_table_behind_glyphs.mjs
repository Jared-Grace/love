import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_table_behind_because } from "./bible_glyph_chapters_table_behind_because.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_chapters_table_behind_glyphs(
  missing,
  deliberate,
  chapter_code,
  settled,
) {
  "The pictures one chapter is behind on that are really work, handed back - with the ones the chapter argued its way out of drawing put onto the list of settled decisions instead, each carrying the reason the chapter gave.";
  "THE TWO ANSWERS LEAVE BY DIFFERENT DOORS ON PURPOSE. Work is returned, because the caller decides whether the chapter is behind at all by whether any is left; a refusal is added to a list handed in, because it belongs to the whole reading rather than to this chapter, and nobody is going to act on it.";
  "A REFUSAL IS NAMED AND NEVER SUBTRACTED IN SILENCE. The chapter code and the reason are written onto the picture as it is set aside, so a number that came down can be argued with rather than only believed.";
  arguments_assert(arguments, 4);
  let names = object_property_names(missing);
  let glyphs = [];
  for (let name of names) {
    let item = property_get(missing, name);
    let because = bible_glyph_chapters_table_behind_because(
      deliberate,
      chapter_code,
      name,
    );
    let b = null_is(because);
    let refused = not(b);
    if (refused) {
      item.chapter_code = chapter_code;
      item.because = because;
      list_add(settled, item);
      continue;
    }
    list_add(glyphs, item);
  }
  return glyphs;
}
