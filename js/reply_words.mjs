import { text_split_space } from "./text_split_space.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_words(phrase) {
  "The words of a phrase in order. A message loses its spaces before it is read, so text with a space in it would never match; this cuts it into words.";
  let words = text_split_space(phrase);
  let r = reply_sequence(words);
  return r;
}
