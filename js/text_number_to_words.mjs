import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { number_to_words } from "./number_to_words.mjs";
export function text_number_to_words(t) {
  "A whole number that is being kept as text, spelled out in English words.";
  "A store keeps a verse number as the text 21 rather than as the number twenty-one, because that is how it was written down and how it goes back out. Spelling it needs the number itself, so the two steps always travel together, and a caller that wants a word from a stored number should not have to remember which order they go in.";
  arguments_assert(arguments, 1);
  let number = number_from_text(t);
  let spelled = number_to_words(number);
  return spelled;
}
