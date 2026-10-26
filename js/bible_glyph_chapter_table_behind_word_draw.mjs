import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { bible_glyph_chapter_glyph_names } from "./bible_glyph_chapter_glyph_names.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_chapters_table_behind_missing } from "./bible_glyph_chapters_table_behind_missing.mjs";
import { bible_glyph_chapter_undrawn_deliberate } from "./bible_glyph_chapter_undrawn_deliberate.mjs";
import { bible_glyph_chapters_table_behind_glyphs } from "./bible_glyph_chapters_table_behind_glyphs.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_chapters_verse_marks_offenders_word_draw } from "./bible_glyph_chapters_verse_marks_offenders_word_draw.mjs";
export async function bible_glyph_chapter_table_behind_word_draw(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("the code names one written chapter. It is data to read and nothing that runs.");
  ("Draws, in one written picture Bible chapter, every picture the root table now seats that the chapter never draws anywhere, wherever the interlinear and the English agree on one single word, and hands back the verses it refused to settle.");
  ("IT IS THE SECOND PASS OVER ONE CHAPTER, and the deciding is not done here. Each picture seated after a chapter was written leaves that chapter holding the word in English, and the reading that counts those words names the chapter and the picture and stops. Where the missing picture goes in a verse is the same question the underdrawn sweep already answers, so this only asks a wider question of the chapter and hands the answer to that judgment unchanged.");
  ("IT ONLY TAKES PICTURES THE WHOLE CHAPTER LACKS. A picture drawn somewhere in the chapter and left out of one verse may be the author choosing English for that word, and the underdrawn sweep is the reading that weighs those. A picture missing from every verse is most often one the table seated after the chapter was written, so nobody chose against it.");
  ("A REFUSAL WRITTEN DOWN STANDS. A picture a chapter left out on purpose, with its reason filed among the deliberate ones, is never offered here, the same way the reading that counts the gap sets it aside as settled.");
  ("IT DOES NOT NAME THE CHAPTER AS REVISITED. That list says a person read the chapter again, and a command drawing the words it can settle is not that.");
  let both = await bible_glyph_chapter_rows_filed(chapter_code);
  let used = {};
  for (let name of bible_glyph_chapter_glyph_names(chapter_code)) {
    property_set(used, name, true);
  }
  let missing = bible_glyph_chapters_table_behind_missing(both.rows, used);
  let deliberate = bible_glyph_chapter_undrawn_deliberate();
  let settled = [];
  let glyphs = bible_glyph_chapters_table_behind_glyphs(
    missing,
    deliberate,
    chapter_code,
    settled,
  );
  let wanted = {};
  for (let item of glyphs) {
    property_set(wanted, item.glyph, true);
  }
  let parsed = bible_glyph_chapter(chapter_code);
  let offenders = [];
  for (let row of both.rows) {
    let seats = {};
    for (let word of row.words) {
      let found = property_get_or_null(wanted, word.glyph);
      if (null_is(found)) {
        continue;
      }
      if (bible_glyph_gloss_placeholder_is(word.gloss)) {
        continue;
      }
      property_count_add(seats, word.glyph, 1);
    }
    let verse = null;
    for (let one of parsed.verses) {
      if (equal(one.verse_number, row.verse_number)) {
        verse = one;
      }
    }
    if (null_is(verse)) {
      continue;
    }
    let drawn = bible_glyph_verse_glyph_counts(verse);
    for (let glyph of object_property_names(seats)) {
      let seat_count = property_get_or_null(seats, glyph);
      let drew_found = property_get_or_null(drawn, glyph);
      let drew = 0;
      let b = null_is(drew_found);
      if (not(b)) {
        drew = drew_found;
      }
      if (less_than(drew, seat_count)) {
        list_add(offenders, {
          chapter_code,
          verse_number: row.verse_number,
          glyph,
          drew,
          seats: seat_count,
        });
      }
    }
  }
  let r = await bible_glyph_chapters_verse_marks_offenders_word_draw(offenders);
  return r;
}
