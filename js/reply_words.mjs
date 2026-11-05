import { equal } from "./equal.mjs";
import { reply_phrase_jesus } from "./reply_phrase_jesus.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_map } from "./list_map.mjs";
export function reply_words(phrase) {
  "The words of a phrase in order, where Jesus, Christ, Jesus Christ and Christ Jesus all stand for one another.";
  let joined = phrase.replace(/\b(jesus christ|christ jesus)\b/g, "jesus");
  function word_read(word) {
    if (equal(word, "jesus") || equal(word, "christ")) {
      let name = reply_phrase_jesus();
      let reversed = reply_sequence(["christ", "jesus"]);
      let either = reply_choice([name, reversed]);
      return either;
    }
    return word;
  }
  let words = text_split_space(joined);
  let read = list_map(words, word_read);
  let r = reply_sequence(read);
  return r;
}
