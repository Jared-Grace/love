import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_verse_marks_underdrawn } from "./bible_glyph_chapters_verse_marks_underdrawn.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { list_includes } from "./list_includes.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { text_is } from "./text_is.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { bible_glyph_chapter_verse_word_replace } from "./bible_glyph_chapter_verse_word_replace.mjs";
export async function bible_glyph_chapters_negation_carried_draw() {
  "Draws the negation mark on the English or that a verse left standing for a second negation the original spells out, and hands back the verses it refused to settle.";
  "HEBREW NEGATES EVERY CLAUSE AND ENGLISH NEGATES THE FIRST ONE. You must not defraud your neighbour or rob him is two negative clauses in the original - lo and velo, two words, each seated on the negation mark - and the translation carries the second one on the word or. So the verse draws one mark, the interlinear seats two, and the word left standing in plain letters is not a missing word at all but a negation wearing a conjunction.";
  "THAT IS A WHOLE CLASS OF THE UNDERDRAWN READING AND IT REPAIRS THE SAME WAY EVERY TIME, which is why this is a command rather than a morning of typing. The reading next door names the chapter, the verse and the mark; what it cannot say is which English word to draw on, because it compares counts and never positions. Here the position is decided by the interlinear itself: the leftover row is glossed or, and the verse holds exactly that many ors.";
  "IT REFUSES EVERY VERSE WHERE THE COUNTS DO NOT LINE UP EXACTLY, and the refusals are the answer as much as the repairs are. One leftover row and two plain ors is a choice between two words, and a choice is a person's. A leftover row glossed anything but or is a different fault wearing the same report line - a word genuinely left out, or a negation swallowed into unsown - and drawing a mark on a guess would file that fault away as fixed.";
  "ONLY THE PLAIN WORDS OF A VERSE ARE LOOKED AT, because a parsed verse holds two kinds of thing - the English a person typed, and the picture groups the shorthand turned into objects - and asking a group for its letters is asking a thing that has none.";
  "EACH VERSE COMMITS ITSELF under the name of the one entry it changed, because a run of independent repairs that commits once at the end loses every one of their names to a single sweep.";
  arguments_assert(arguments, 0);
  let carrying_words = ["or", "nor"];
  let offenders = await bible_glyph_chapters_verse_marks_underdrawn();
  let filed = {};
  let drew = [];
  let left = [];
  await ai_git_noted();
  for (let offender of offenders) {
    let negation = equal(offender.glyph, "no_entry");
    if (not(negation)) {
      continue;
    }
    let chapter_code = offender.chapter_code;
    let found = property_get_or_null(filed, chapter_code);
    let fresh = null_is(found);
    if (fresh) {
      found = await bible_glyph_chapter_rows_filed(chapter_code);
      property_set(filed, chapter_code, found);
    }
    let row = null;
    for (let one of found.rows) {
      let same = equal(one.verse_number, offender.verse_number);
      if (same) {
        row = one;
      }
    }
    let rowless = null_is(row);
    if (rowless) {
      list_add(left, {
        offender,
        why: "the interlinear files no row for this verse",
      });
      continue;
    }
    let carried = 0;
    for (let word of row.words) {
      let seated = equal(word.glyph, "no_entry");
      if (not(seated)) {
        continue;
      }
      let t = text_lower_to(word.gloss);
      let bare = text_letters_only(t);
      let carries = list_includes(carrying_words, bare);
      if (carries) {
        carried = add(carried, 1);
      }
    }
    let short = subtract(offender.seats, offender.drew);
    let parsed = bible_glyph_chapter(chapter_code);
    let verse = null;
    for (let one of parsed.verses) {
      let same = equal(one.verse_number, offender.verse_number);
      if (same) {
        verse = one;
      }
    }
    let entries = [];
    for (let entry of verse.words) {
      let plain = text_is(entry);
      if (not(plain)) {
        continue;
      }
      let t2 = text_lower_to(entry);
      let bare2 = text_letters_only(t2);
      let carries2 = list_includes(carrying_words, bare2);
      if (carries2) {
        list_add(entries, entry);
      }
    }
    let rows_match = equal(carried, short);
    let words_match = equal(entries.length, short);
    let settled = rows_match && words_match;
    if (not(settled)) {
      list_add(left, {
        offender,
        carried,
        short,
        entries,
        why: "the leftover rows and the plain words in the verse do not pair off one to one",
      });
      continue;
    }
    for (let entry of entries) {
      let letters = text_letters_only(entry);
      let to = entry.replace(letters, "$no_entry");
      let done = await function_call_commit(
        bible_glyph_chapter_verse_word_replace,
        [chapter_code, offender.verse_number, entry, 1, to],
      );
      list_add(drew, done);
    }
  }
  let r = {
    drew,
    left,
  };
  return r;
}
