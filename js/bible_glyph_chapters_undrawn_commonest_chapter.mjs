import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_chapter_draft_words } from "./bible_glyph_chapter_draft_words.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { property_set } from "./property_set.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function bible_glyph_chapters_undrawn_commonest_chapter(
  chapters,
  occurrences,
  glosses,
  originals,
  testaments,
  strongs,
  chapters_seen,
) {
  arguments_assert(arguments, 7);
  let words_total = 0;
  let drawn_total = 0;
  let filler_total = 0;
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let testament_name = bible_chapter_testament_name(chapter_code);
    let rows = await bible_glyph_chapter_draft_words(
      chapter_code,
      testament_name,
    );
    let here = {};
    for (let row of rows) {
      for (let word of row.words) {
        words_total = add(words_total, 1);
        let blank = equal(word.glyph, "");
        if (not(blank)) {
          drawn_total = add(drawn_total, 1);
          continue;
        }
        let gloss = word.gloss;
        let filler = bible_glyph_gloss_placeholder_is(gloss);
        if (filler) {
          filler_total = add(filler_total, 1);
          continue;
        }
        let key = testament_name + " " + word.strong;
        property_count_add(occurrences, key, 1);
        property_set(here, key, true);
        let wordings = property_or_null(glosses, key);
        let first_seen = null_is(wordings);
        if (first_seen) {
          wordings = {};
          property_set(glosses, key, wordings);
          property_set(originals, key, word.original);
          property_set(testaments, key, testament_name);
          property_set(strongs, key, word.strong);
        }
        property_count_add(wordings, gloss, 1);
      }
    }
    for (let key of object_property_names(here)) {
      property_count_add(chapters_seen, key, 1);
    }
  }
  let r = {
    words_total,
    drawn_total,
    filler_total,
  };
  return r;
}
