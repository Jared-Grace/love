import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_to_parts } from "./function_name_to_parts.mjs";
import { equal } from "./equal.mjs";
export function function_name_word_repeated_is(f_name) {
  "$plain f_name";
  arguments_assert(arguments, 1);
  ("Whether a name says the same word twice running.");
  ("A name here is its parts joined, so every part is meant to say something the parts beside it do not. A part that repeats the one before it says nothing at all: the reader has already been told that word, and the second telling narrows nothing.");
  ("This is what the two cutting moves ask before they take a name they worked out rather than one somebody chose. A cut borrows the word its last statement mentions, and that word is very often the word the holder is already called - a holder whose own last part is scrolling, holding a run that ends on scrolling, would carry that one word away twice over in a row. The name reads as a name somebody chose, so nothing else in the repo would ever question it.");
  ("Two words running that merely look alike are left alone. Only the same word twice is asked about, because that is the case where the second is certainly carrying nothing; a pair that is nearly the same may be a real narrowing and only a reader can tell.");
  let parts = function_name_to_parts(f_name);
  let before = null;
  for (let word of parts) {
    let same_is = equal(word, before);
    if (same_is) {
      return true;
    }
    before = word;
  }
  return false;
}
