import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
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
export async function bible_glyph_chapters_verse_marks_overdrawn_walked() {
  arguments_assert(arguments, 0);
  ("Every place an authored picture Bible chapter draws a mark in a verse more times than that same verse seats it, said one verse at a time.");
  ("A CHAPTER-WIDE COUNT HIDES THIS AND THE HIDING IS NOT RARE. The chapter reading adds every verse together, so a mark drawn twice in one verse and left off a seated word in another comes out even and the chapter looks clean. Read verse by verse both halves show. The forty seventh of Genesis is the proof: the chapter said the sun mark was drawn seventeen times for nine seats, and read a verse at a time every one of the eight extras turned out to be the mark put on the word for year, which the table does not seat at all.");
  ("IT IS THE MIRROR OF THE UNDERDRAWN READING NEXT DOOR AND SHARES ITS WHOLE ARGUMENT. That one catches a seated word left in letters beside its own drawn mark; this one catches a picture put on a word the verse never seated. Same walk, same rows, same reason for scoping to one verse, and the comparison is turned around: there, drawn fewer than seated; here, drawn more.");
  ("IT COMPARES COUNTS AND NEVER POSITIONS. The authored chapter is readable English and the interlinear is word for word the original, and nothing honest lines one up against the other. What a count settles completely is that the verse drew more pictures of one mark than the original had words for it, and no arrangement of the sentence makes that anything but a picture with nothing under it.");
  ("A VERSE WITH NOUGHT SEATS IS INCLUDED AND IT IS THE LOUDEST CASE, because a mark drawn where the verse seats it not once is the whole of the two root fault: the English word carried the picture across to a root the table gives it to somebody else.");
  ("HOW MUCH WAS REACHED IS COUNTED WHERE THE READING HAPPENS and travels out beside the answer, because on a good day the answer is empty and an empty answer is also what a sweep that opened nothing hands back.");
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
        if (bible_glyph_gloss_placeholder_is(word.gloss)) {
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
        let over = less_than(seats, drew);
        if (over) {
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
