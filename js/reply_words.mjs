import { text_split_space } from "./text_split_space.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_words(phrase) {
  "A rule that reads the words of the given phrase in order, written as one plain line so a long wording can be read at a glance.";
  let words = text_split_space(phrase);
  let read = reply_sequence(words);
  return read;
}
