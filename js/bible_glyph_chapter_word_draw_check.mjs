import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_is } from "./text_is.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapter_word_draw_check(
  chapter_code,
  word,
  glyph,
) {
  "$plain chapter_code";
  "the code names one already-authored picture chapter to read. It names a stretch of text and nothing that runs.";
  "$plain word";
  "the English word that is being considered for a mark. It is compared as letters and nothing runs it.";
  "$plain glyph";
  "the name of the mark it would be drawn as. It is compared as a name and nothing runs it.";
  arguments_assert(arguments, 3);
  ("Whether drawing one English word of one chapter as one mark would be RIGHT everywhere it stands, told verse by verse: each place the word is still in plain letters, and whether that verse has an original word seated on that mark which nobody has drawn yet.");
  ("IT IS THE MISSING HALF OF THE COMMAND THAT DOES THE DRAWING. That command is scoped to one chapter for a good reason and then draws every occurrence in it, and its own prose says the count is the answer and the author is checking it against a number they already know. This is where that number comes from, so the author is no longer asked to hold it in their head.");
  ("A WORD IN A VERSE WITH NOTHING LEFT UNDRAWN IS THE WHOLE HAZARD. English gives one word to several original roots - said is amar in one line and dabar in the next - so a chapter-wide draw can hand the second root the first one's picture without anybody reading the original. A verse that seated the mark and drew them all already has no room for another, so a plain word standing there is standing for something else.");
  ("IT DECIDES NOTHING AND WRITES NOTHING. It reports both lists and lets the person drawing look at the ones that do not line up, because whether an English word in a verse with room is really the word that was seated is a question about the original that only reading it answers.");
  let filed_rows = await bible_glyph_chapter_rows_filed(chapter_code);
  let rows = property_get(filed_rows, "rows");
  let seated_by_verse = {};
  for (let row of rows) {
    let number = property_get(row, "verse_number");
    let seated = 0;
    let words = property_get(row, "words");
    for (let token of words) {
      let word_glyph = property_get(token, "glyph");
      let same = equal(word_glyph, glyph);
      if (not(same)) {
        continue;
      }
      seated = add(seated, 1);
    }
    property_set(seated_by_verse, number, seated);
  }
  let wanted = text_lower_to(word);
  let parsed = bible_glyph_chapter(chapter_code);
  let verses = property_get(parsed, "verses");
  let room = [];
  let crowded = [];
  for (let verse of verses) {
    let number = property_get(verse, "verse_number");
    let words = property_get(verse, "words");
    ("A DRAWN MARK IS NOT A DOLLAR WORD BY THE TIME IT GETS HERE. The reader that parses a chapter turns one into a list holding a list holding the mark name, with whatever punctuation followed it as a further item, so asking whether a word starts with a dollar is a question no word can ever answer yes to. That was written first and it counted every mark in the chapter as nothing, which is a check that cannot disagree rather than a check that passed. The counting is asked of the reading that already does it instead, which is also the only place that knows a group of two pictures is one mark.");
    let counts = bible_glyph_verse_glyph_counts(verse);
    let counted = property_get_or_null(counts, glyph);
    let never = null_is(counted);
    let drawn = counted;
    if (never) {
      drawn = 0;
    }
    let standing = 0;
    for (let token of words) {
      let spelled = text_is(token);
      if (not(spelled)) {
        continue;
      }
      let letters = text_letters_only(token);
      let lowered = text_lower_to(letters);
      let hit = equal(lowered, wanted);
      if (not(hit)) {
        continue;
      }
      standing = add(standing, 1);
    }
    let none = equal(standing, 0);
    if (none) {
      continue;
    }
    let seated = property_get_or_null(seated_by_verse, number);
    let missing = null_is(seated);
    if (missing) {
      seated = 0;
    }
    let left = subtract(seated, drawn);
    let line = {
      verse_number: number,
      standing,
      drawn,
      seated,
      undrawn: left,
    };
    let has_room = less_than(0, left);
    if (has_room) {
      list_add(room, line);
      continue;
    }
    list_add(crowded, line);
  }
  let r = {
    chapter_code,
    word,
    glyph,
    room,
    crowded,
  };
  return r;
}
