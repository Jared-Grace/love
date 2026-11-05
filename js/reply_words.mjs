import { equal } from "./equal.mjs";
import { reply_phrase_jesus_either_order } from "./reply_phrase_jesus_either_order.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_map } from "./list_map.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_words(phrase) {
  "The words of a phrase in order, where Jesus, Christ, Jesus Christ and Christ Jesus all stand for one another.";
  let joined = phrase.replace(/\b(jesus christ|christ jesus)\b/g, "jesus");
  function word_read(word) {
    if (equal(word, "jesus") || equal(word, "christ")) {
      let either = reply_phrase_jesus_either_order();
      return either;
    }
    return word;
  }
  let words = text_split_space(joined);
  let read = list_map(words, word_read);
  let r = reply_sequence(read);
  return r;
}
