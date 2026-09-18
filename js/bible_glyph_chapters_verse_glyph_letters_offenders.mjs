import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_verse_glyph_letters_offenders(
  glyph,
) {
  "$plain glyph";
  "the glyph is the NAME of one picture, as the character table spells it. It is looked up and counted, and nothing about it runs.";
  "Every verse the original seats ONE NAMED picture in more often than the verse draws it, INCLUDING the verses that draw it no times at all.";
  "THE UNDERDRAWN READING CANNOT SEE A VERSE THAT DREW NONE, and says so in its own prose: it walks the glyphs a verse drew, so a glyph seated in a verse and drawn zero times is never once looked at. That bound is right for the reading it belongs to, because it ratchets against a baseline and a verse drawing none of a seated picture is usually not a defect at all - it is a verse nobody has drawn yet, and there are tens of thousands of those.";
  "IT IS WRONG FOR ONE SITUATION AND THAT SITUATION IS WHY THIS EXISTS (2026-09-18). When two different words have been sharing one picture, an author meeting either of them had no way to draw it - the same mark twice in a line says nothing - so the word was written out in English on purpose. Those verses are authored, not undrawn, and they draw the picture zero times. The covenant name and the ordinary word name were in exactly that state until the seats were parted, leaving a hundred and sixty four covenant names standing in letters across a hundred and thirteen written chapters.";
  "IT IS ASKED FOR ONE PICTURE AT A TIME AND THAT IS THE SAFETY. Asked for every picture at once this would hand back the whole undrawn Bible and the judgment downstream would be spending its refusals on work nobody has started. Named one picture at a time it hands back exactly the verses a just-ended collision stranded, and the caller has to be able to say which picture and why.";
  arguments_assert(arguments, 1);
  let chapters = bible_glyph_chapters();
  let offenders = [];
  let walked = 0;
  for (let chapter of chapters) {
    let chapter_code = chapter.chapter_code;
    let both = await bible_glyph_chapter_rows_filed(chapter_code);
    let seated_by_verse = {};
    for (let row of both.rows) {
      let seats = 0;
      for (let word of row.words) {
        let same = equal(word.glyph, glyph);
        if (not(same)) {
          continue;
        }
        if (bible_glyph_gloss_placeholder_is(word.gloss)) {
          continue;
        }
        seats = add(seats, 1);
      }
      property_set(seated_by_verse, row.verse_number, seats);
    }
    let parsed = bible_glyph_chapter(chapter_code);
    for (let verse of parsed.verses) {
      let verse_number = verse.verse_number;
      walked = add(walked, 1);
      let found = property_get_or_null(seated_by_verse, verse_number);
      let unfiled = null_is(found);
      let seats = 0;
      if (not(unfiled)) {
        seats = found;
      }
      let drawn = bible_glyph_verse_glyph_counts(verse);
      let counted = property_get_or_null(drawn, glyph);
      let none = null_is(counted);
      let drew = 0;
      if (not(none)) {
        drew = counted;
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
  let r = {
    walked,
    offenders,
  };
  return r;
}
