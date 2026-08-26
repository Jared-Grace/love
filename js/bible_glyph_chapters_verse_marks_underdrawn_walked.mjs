import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { text_letters_digits_none_is } from "./text_letters_digits_none_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { equal } from "./equal.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_verse_marks_underdrawn_walked() {
  arguments_assert(arguments, 0);
  ("Every place an authored picture Bible chapter DRAWS a mark in a verse and, in that SAME verse, leaves another word the table seats on that very mark standing in plain English letters.");
  ("IT IS THE INVERSE OF THE SIBLING NEXT DOOR AND NOTHING ELSE IN THE REPO LOOKED FOR IT. That reading catches a mark drawn on a word the table never seated it on; this catches a word the table DID seat left undrawn. The two are not the same mistake read from two ends - one is a picture invented, the other a picture withheld - and until this existed a chapter could sit committed for a day with five seated words spelled out in letters and every gate green.");
  ("DRAWING FEWER IS ALLOWED ACROSS A CHAPTER AND THAT IS WHY THIS IS SCOPED TO ONE VERSE. An author may decide a word reads better in English and leave it so all the way down, and the psalter did exactly that on purpose with a written reason; a chapter-wide count cannot tell that decision from an oversight. Inside a single verse it can: the author drew the mark right there, so they did not decide the mark was wrong for that word, and the same word beside it in letters is an inconsistency the page shows the reader.");
  ("IT COMPARES COUNTS AND NEVER POSITIONS, the same bound the sibling states. The authored chapter is readable English and the interlinear is word-for-word original, and there is no honest way to line one up against the other. What a count settles completely is that the verse had MORE seated occurrences than it drew while drawing at least one, and no arrangement of the sentence makes that anything but a word left behind.");
  ("A TEXT-ONLY VERSION OF THIS IS IMPOSSIBLE AND IT WAS TRIED FIRST. Matching an English word against the table's glosses reads hand as the correct gloss of both yad, which is seated, and yamin, which is not, so a verse saying right hand beside a drawn hand looks like this defect and is not one. Only the Strong's number separates them, so the interlinear is not an optimisation here - it is the only thing that makes the question decidable.");
  ("HOW MUCH WAS REACHED IS COUNTED WHERE THE READING HAPPENS and travels out beside the answer, because on a good day the answer is empty and an empty answer is also what a sweep that opened nothing hands back. The number counted is marks compared, one for every picture a verse drew.");
  let chapters = bible_glyph_chapters();
  let offenders = [];
  let walked = 0;
  for (let chapter of chapters) {
    let chapter_code = chapter.chapter_code;
    let both = await bible_glyph_chapter_rows_filed(chapter_code);
    let rows = both.rows;
    let seated_by_verse = {};
    for (let row of rows) {
      let counts = {};
      for (let word of row.words) {
        let undrawn = equal(word.glyph, "");
        if (undrawn) {
          continue;
        }
        if (text_letters_digits_none_is(word.gloss)) {
          continue;
        }
        property_count_add(counts, word.glyph, 1);
      }
      property_set(seated_by_verse, row.verse_number, counts);
    }
    let parsed = bible_glyph_chapter(chapter_code);
    for (let verse of parsed.verses) {
      let verse_number = verse.verse_number;
      let drawn = bible_glyph_verse_glyph_counts(verse);
      let found = property_get_or_null(seated_by_verse, verse_number);
      let missing = null_is(found);
      let seated = {};
      let known = not(missing);
      if (known) {
        seated = found;
      }
      for (let glyph of object_property_names(drawn)) {
        walked = add(walked, 1);
        let drew = property_get(drawn, glyph);
        let seats_found = property_get_or_null(seated, glyph);
        let seats = 0;
        let unseated = null_is(seats_found);
        let seated_here = not(unseated);
        if (seated_here) {
          seats = seats_found;
        }
        let short = less_than(drew, seats);
        if (short) {
          list_add(offenders, {
            chapter_code,
            verse_number,
            glyph,
            drew,
            seats,
          });
        }
      }
    }
  }
  let r = {
    walked,
    offenders,
  };
  return r;
}
