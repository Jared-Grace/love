import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_name_badges_seated } from "./bible_glyph_chapter_name_badges_seated.mjs";
import { bible_glyph_chapter_verse_word_entry_replace } from "./bible_glyph_chapter_verse_word_entry_replace.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export async function bible_glyph_chapter_name_badges_seated_draw(
  chapter_code,
) {
  "Draws every name badge in ONE written picture Bible chapter whose name the table now draws, writing the name's own picture sequence in place of the badge and its letters, and proves it replaced exactly what the reading named.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a chapter to read and write back, and nothing that runs.";
  "IT IS THE BADGE DRAWER RUN THE OTHER WAY, and it is built the same way for the same reasons, which are written there: a verse is the unit the reading answers in, each verse and word pair is asked for once, and the proof is the count the writing reports rather than a second reading of a module the program already holds.";
  "THE LETTERS GO THIS TIME. A badge keeps the letters because a name had no picture; a seated name has one, so it is drawn like any other word - the picture replaces the English and the punctuation behind it stays.";
  arguments_assert(arguments, 1);
  let told = await bible_glyph_chapter_name_badges_seated(chapter_code);
  let wanted = {};
  for (let offender of told.offenders) {
    let key = offender.verse_number + " " + offender.word;
    let found = wanted[key];
    if (equal(found, undefined)) {
      found = {
        verse_number: offender.verse_number,
        word: offender.word,
        entry: offender.entry,
        named: 0,
      };
      wanted[key] = found;
    }
    found.named = found.named + 1;
  }
  let missed = [];
  let marks = 0;
  for (let one of Object.values(wanted)) {
    let done = await bible_glyph_chapter_verse_word_entry_replace(
      chapter_code,
      one.verse_number,
      one.word,
      one.entry,
    );
    if (not_equal(done.replaced, one.named)) {
      missed.push({
        verse_number: one.verse_number,
        word: one.word,
        named: one.named,
        replaced: done.replaced,
      });
    }
    marks = marks + done.replaced;
  }
  let hint =
    "the verse spelled these badges a different number of times than the drawing replaced, so the page and the reading disagree about where they stand - read the verse and compare its entries against what the reading named";
  list_empty_is_assert_walked_generic(told.offenders.length, missed, hint);
  let r = {
    chapter_code,
    marks,
  };
  return r;
}
