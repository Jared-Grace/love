import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
export function bible_glyph_word_marks_edge(word, at_end) {
  "$plain word";
  "$plain at_end";
  "the word is one stored word of a verse and the flag says which end of it to look at. Both are data to read and neither runs.";
  "The marks standing at one end of a stored word with no text of any kind after them, or nothing when that end is text rather than pictures.";
  "IT ANSWERS WHETHER A WORD CAN TOUCH ITS NEIGHBOUR AMBIGUOUSLY, which is the only question anyone asks it. Two words drawn side by side are told apart by the gap between them and by nothing else, so the pair that can be misread as one word is a word ENDING in pictures followed by a word STARTING with pictures. A semicolon, a comma or a letter at that edge separates them by itself and costs the reader nothing.";
  "A PLAIN ENGLISH WORD ANSWERS NOTHING rather than an empty list, so a caller can tell apart a word that cannot collide from a word whose marks happen to be none.";
  arguments_assert(arguments, 2);
  let plain = equal(typeof word, "string");
  if (plain) {
    let no_marks = null;
    return no_marks;
  }
  let empty = list_empty_is(word);
  if (empty) {
    let no_parts = null;
    return no_parts;
  }
  let part = at_end ? list_last(word) : list_first(word);
  let text = equal(typeof part, "string");
  if (text) {
    let text_edge = null;
    return text_edge;
  }
  return part;
}
