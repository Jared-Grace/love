import { equal } from "./equal.mjs";
import { reply_phrase_jesus } from "./reply_phrase_jesus.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_map } from "./list_map.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_words(phrase) {
  "The words of a phrase in order, where every way of saying the name of Jesus stands for the others.";
  let joined = phrase.replace(/\b(jesus christ|christ jesus)\b/g, "jesus");
  function word_read(word) {
    if (equal(word, "jesus") || equal(word, "christ")) {
      let phrase_jesus = reply_phrase_jesus();
      return phrase_jesus;
    }
    return word;
  }
  let words = text_split_space(joined);
  let read = list_map(words, word_read);
  let r = reply_sequence(read);
  return r;
}
