import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_chapters_groups_marks_alone_stored(
  chapters,
  entries,
) {
  arguments_assert(arguments, 2);
  for (let stored of chapters) {
    let chapter_code = property_get(stored, "chapter_code");
    let chapter = bible_glyph_chapter(chapter_code);
    let verses = property_get(chapter, "verses");
    for (let verse of verses) {
      let verse_number = property_get(verse, "verse_number");
      let words = property_get(verse, "words");
      for (let word of words) {
        let plain = equal(typeof word, "string");
        if (plain) {
          continue;
        }
        for (let part of word) {
          let text = equal(typeof part, "string");
          if (text) {
            continue;
          }
          list_add(entries, {
            chapter_code,
            verse_number,
            names: part,
          });
        }
      }
    }
  }
}
