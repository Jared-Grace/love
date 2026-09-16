import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function bible_word_section_mark_lone_is(word) {
  "$plain word";
  "Whether one word cut out of a Bible line is nothing but a Hebrew paragraph mark standing on its own.";
  "★ A MARK STANDING ALONE IS NOT A WORD. It tells a scribe where a section of the book ends; it is never read aloud, never translated, and nothing that explains the line has anything to say about it. So wherever a line is cut into the words a reader is walked through, this is the test for the piece that must not be counted as one of them.";
  "★ IT ASKS ABOUT A WHOLE PIECE, NOT A LAST LETTER, and that is the whole difference between it and the spelling cut beside it. The closed mark is written with a letter that ends real words, so a last-letter rule would swallow the last sound of those words - but a piece that is only that one letter, with nothing before it, can be nothing else.";
  arguments_assert(arguments, 1);
  let open_mark = equal(word, "פ");
  let closed_mark = equal(word, "ס");
  let r = open_mark || closed_mark;
  return r;
}
