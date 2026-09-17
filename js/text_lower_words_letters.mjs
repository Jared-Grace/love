import { text_lower_to } from "./text_lower_to.mjs";
import { regex_letters_not } from "./regex_letters_not.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export function text_lower_words_letters(text) {
  "The words of a text in lower case, each one only its letters, with nothing left over between them.";
  let lowered = text_lower_to(text);
  let r = regex_letters_not();
  let words = [];
  for (let part of lowered.split(r)) {
    let blank = text_empty_is(part);
    if (blank) {
      continue;
    }
    list_add(words, part);
  }
  return words;
}
