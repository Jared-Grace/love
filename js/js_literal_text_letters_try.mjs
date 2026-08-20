import { arguments_assert } from "./arguments_assert.mjs";
import { js_literal_value_deep_try } from "./js_literal_value_deep_try.mjs";
import { not } from "./not.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { text_is } from "./text_is.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
export function js_literal_text_letters_try(node) {
  "The words a piece of code was written out as, when it was written out in place and what it says has a letter in it, and nothing at all when any of that fails.";
  "The three questions only mean anything in this order, and none of them can be asked before the one in front of it has been answered. Asking what a piece of code says when it is not a written-out value reaches for something that is not there; asking whether words have letters in them when they are a number reaches for the same absence one step later.";
  "A run of characters with no letter in it is treated as not being words at all. An arrow, a space, a gap between two things reads the same in every language there is, so a reader looking for words still in one language would have those buried under the ones that never could be in any.";
  "It is one name rather than four lines because two readers of the same code both had to ask it - one naming the words still written in one language, the other naming the places words go out through - and the two must widen together or the second will report on doors the first no longer watches.";
  arguments_assert(arguments, 1);
  let words = js_literal_value_deep_try(node);
  let written = text_is(words);
  if (not(written)) {
    return null;
  }
  let letters = text_letters_only(words);
  let anything = text_empty_not_is(letters);
  if (not(anything)) {
    return null;
  }
  return words;
}
