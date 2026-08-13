import { regex_word } from "./regex_word.mjs";
import { add } from "./add.mjs";
export function text_words_replaced(t, words) {
  "One piece of text with its words swapped for the ones given, in order, and every mark left standing exactly where it was.";
  "Rebuilding the line from the new words and spaces would lose the hyphen inside a word and the comma at the end of one, so the marks are never taken apart at all - only the runs of letters between them are handed over and put back.";
  "It is given as many words as the text has, because the caller found them with the reader that is the exact other side of this one. A word too few would leave the tail of the line empty.";
  let r = regex_word();
  let at = 0;
  function word_take() {
    let word = words[at];
    at = add(at, 1);
    return word;
  }
  let replaced = t.replace(r, word_take);
  return replaced;
}
