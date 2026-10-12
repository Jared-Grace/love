import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
import { bible_glyph_word_marks_edge } from "./bible_glyph_word_marks_edge.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { list_last } from "./list_last.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export function bible_glyph_chapter_marks_adjacent(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter, spelled as the chapter codes spell it. It names a chapter to look up and nothing that runs.";
  "Every neighbouring pair of words in one chapter where the first ends in pictures and the second begins with them, with the marks on each side and whether they are the same.";
  "IT WALKS THE PAIRS AND NOT THE WORDS, because the thing being measured lives between two words rather than in either of them. A word ending in a semicolon separates itself from whatever follows, so the reading next door answers nothing for that end and the pair is skipped without a rule of its own here.";
  "THE MARKS ARE JOINED INTO ONE PIECE OF TEXT for comparing and for reporting, since a name list is what the store holds and a person reading the answer wants to see the two sides side by side.";
  "IT ASKS FOR THE PARSED CHAPTER AND NEVER THE STORED ONE, which is the whole reason it takes a code rather than a chapter. The list of chapters hands back what an author typed - shorthand, where every word is still a piece of text - so a reading that walked it would find no pictures anywhere and answer nothing at all. That is exactly what this did when it was first written, and nothing threw: an empty answer to a question about ambiguity reads as good news.";
  arguments_assert(arguments, 1);
  let chapter = bible_glyph_chapter(chapter_code);
  let verses = property_get(chapter, "verses");
  let found = [];
  for (let verse of verses) {
    let verse_number = property_get(verse, "verse_number");
    let words = property_get(verse, "words");
    let index = 1;
    while (less_than(index, words.length)) {
      let before = bible_glyph_word_marks_edge(words[subtract(index, 1)], true);
      let after = bible_glyph_word_marks_edge(words[index], false);
      index = index + 1;
      let missing = equal(before, null);
      if (missing) {
        continue;
      }
      let missing_after = equal(after, null);
      if (missing_after) {
        continue;
      }
      let before_text = before.join("+");
      let after_text = after.join("+");
      let same = equal(before_text, after_text);
      ("A NAME WRITTEN OUT AFTER ITS MARK IS SAID APART, because the name mark binds to the letters that follow it: a reader meeting a name mark with a name glued to it reads a name, never a group closing on that mark. So a reading of the join can tell a free-standing last mark from one that belongs to the letters after it.");
      let after_word = words[subtract(index, 1)];
      let left = list_last(after);
      let after_named =
        equal(left, "proper_name") && equal(typeof after_word[1], "string");
      list_add(found, {
        chapter_code,
        verse_number,
        before: before_text,
        after: after_text,
        same,
        after_named,
      });
    }
  }
  let none = not(found.length);
  if (none) {
    let empty = [];
    return empty;
  }
  return found;
}
