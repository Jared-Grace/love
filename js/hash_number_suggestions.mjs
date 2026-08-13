import { text_digits_only } from "./text_digits_only.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { not } from "./not.mjs";
export function hash_number_suggestions(word) {
  "The number hiding inside something written where a place in the quiz should be - offered back when there is one, and nothing offered when there is not.";
  "A word here is not a misspelling of another word, so there is no list to look it up in and nothing to measure it against. What goes wrong instead is a number arriving with something stuck to it, from a link cut short or pasted together, and the digits already in it are then exactly what the reader meant. When nothing is left after the digits are taken out, the honest answer is none.";
  let digits = text_digits_only(word);
  let number_is = text_digits_is(digits);
  if (not(number_is)) {
    let none = [];
    return none;
  }
  let nearest = [digits];
  return nearest;
}
