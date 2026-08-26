import { arguments_assert } from "./arguments_assert.mjs";
import { text_words } from "./text_words.mjs";
import { list_add } from "./list_add.mjs";
import { text_sentence_ends } from "./text_sentence_ends.mjs";
export function text_last_sentence_words(t) {
  "$plain t";
  "The words of the final sentence in a piece of text, or of the whole of it where it holds only one.";
  "A repeated form of words that closes a unit is a sentence rather than a whole line - a chapter says the same thing at the end of each of its parts while the sentence in front of that is different every time. Comparing whole lines would therefore find no repetition at all, and comparing a fixed number of final words would break as soon as one of the closings ran a word longer.";
  "Where nothing before the last word closes a sentence, the whole text comes back. That is the truthful answer rather than a fallback: a text holding one sentence has that sentence as its last.";
  arguments_assert(arguments, 1);
  let words = text_words(t);
  let sentence = [];
  let closed = false;
  for (let word of words) {
    if (closed) {
      sentence = [];
      closed = false;
    }
    list_add(sentence, word);
    let ends = text_sentence_ends(word);
    if (ends) {
      closed = true;
    }
  }
  return sentence;
}
