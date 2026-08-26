import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { add } from "./add.mjs";
import { bible_glyph_negation_doubled_words_reason } from "./bible_glyph_negation_doubled_words_reason.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_negation_doubled_names_walked() {
  "Every picture Bible verse that negates the same thing twice, named by its chapter, its number and which of the two shapes it is, together with how many verses were opened to find them.";
  "The count travels because nothing wrong is also what a sweep that stopped reaching the chapters would say, and the walk is the only part of this answer that falls in that case.";
  "A verse is named rather than a chapter, because the fault is one line and the chapters run to fifty of them.";
  arguments_assert(arguments, 0);
  let chapters = bible_glyph_chapters();
  let offenders = [];
  let walked = 0;
  for (let chapter of chapters) {
    let chapter_code = chapter.chapter_code;
    let verses = chapter.verses;
    for (let verse of verses) {
      walked = add(walked, 1);
      let words = verse.words;
      let reason = bible_glyph_negation_doubled_words_reason(words);
      let clean = equal(reason, "");
      if (not(clean)) {
        let verse_number = verse.verse_number;
        let name = `${chapter_code} ${verse_number} ${reason}`;
        list_add(offenders, name);
      }
    }
  }
  let r = {
    walked,
    offenders,
  };
  return r;
}
