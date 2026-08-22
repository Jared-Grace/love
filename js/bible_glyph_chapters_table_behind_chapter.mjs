import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_chapter_glyph_names } from "./bible_glyph_chapter_glyph_names.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_chapter_draft_words } from "./bible_glyph_chapter_draft_words.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_chapters_table_behind_absent } from "./bible_glyph_chapters_table_behind_absent.mjs";
import { not } from "./not.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_glyph_chapters_table_behind_because } from "./bible_glyph_chapters_table_behind_because.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function bible_glyph_chapters_table_behind_chapter(
  chapters,
  deliberate,
  settled,
  behind,
) {
  arguments_assert(arguments, 4);
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let testament_name = bible_chapter_testament_name(chapter_code);
    let drawn = bible_glyph_chapter_glyph_names(chapter_code);
    let used = {};
    for (let name of drawn) {
      property_set(used, name, true);
    }
    let rows = await bible_glyph_chapter_draft_words(
      chapter_code,
      testament_name,
    );
    let missing = {};
    for (let row of rows) {
      for (let word of row.words) {
        let glyph = property_get(word, "glyph");
        let blank = equal(glyph, "");
        if (blank) {
          continue;
        }
        let absent = bible_glyph_chapters_table_behind_absent(used, glyph);
        if (not(absent)) {
          continue;
        }
        let seen = property_or_null(missing, glyph);
        let first = null_is(seen);
        if (first) {
          seen = {
            glyph,
            original: property_get(word, "original"),
            gloss: property_get(word, "gloss"),
            strong: property_get(word, "strong"),
            occurrences: 0,
          };
          property_set(missing, glyph, seen);
        }
        seen.occurrences = add(seen.occurrences, 1);
      }
    }
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
    let none = list_empty_is(glyphs);
    if (none) {
      continue;
    }
    list_add(behind, {
      chapter_code,
      glyphs,
    });
  }
}
