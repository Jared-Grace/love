import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_word_marks_edge } from "./bible_glyph_word_marks_edge.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_chapter_marks_adjacent(chapter) {
  "$plain chapter";
  "the chapter is one stored picture Bible chapter. It is data to read and nothing that runs.";
  "Every neighbouring pair of words in one chapter where the first ends in pictures and the second begins with them, with the marks on each side and whether they are the same.";
  "IT WALKS THE PAIRS AND NOT THE WORDS, because the thing being measured lives between two words rather than in either of them. A word ending in a semicolon separates itself from whatever follows, so the reading next door answers nothing for that end and the pair is skipped without a rule of its own here.";
  "THE MARKS ARE JOINED INTO ONE PIECE OF TEXT for comparing and for reporting, since a name list is what the store holds and a person reading the answer wants to see the two sides side by side.";
  arguments_assert(arguments, 1);
  let chapter_code = property_get(chapter, "chapter_code");
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
      list_add(found, {
        chapter_code,
        verse_number,
        before: before_text,
        after: after_text,
        same,
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
