import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
export function greek_word_speech_text(text) {
  "$plain text";
  "one Greek word as the Bible text spells it. It is spoken, never run.";
  "The words to hand a Greek voice so it says a word rather than naming a letter, given the word as the Bible spells it.";
  "A WORD OF ONE LETTER IS NAMED RATHER THAN SAID unless it is spelled the modern way and closed with a full stop, so that is the only word this changes.";
  "Every longer word is handed back untouched, because the old spelling was already heard to be said correctly and its accent is what tells the voice which part to stress.";
  function lambda(c) {
    let b = /\p{M}/u.test(c);
    let n = not(b);
    return n;
  }
  let letters = [...text.normalize("NFD")].filter(lambda);
  if (not_equal(letters.length, 1)) {
    return text;
  }
  let result = letters.join("") + ".";
  return result;
}
