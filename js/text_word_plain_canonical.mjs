import { arguments_assert } from "./arguments_assert.mjs";
import { text_word_plain } from "./text_word_plain.mjs";
import { text_words_plain_canonical } from "./text_words_plain_canonical.mjs";
import { equal } from "./equal.mjs";
export function text_word_plain_canonical(word) {
  "$plain word";
  "One word stripped to its bare letters in one case, and then, where it is one of the few words this repo has seen written two ways, put into the one spelling everything compares by.";
  "★ IT IS A SECOND STEP AFTER THE STRIPPING AND NOT A WIDER STRIPPING, BECAUSE THE TWO ARE TRUE OF DIFFERENT THINGS. Taking off punctuation and case is true of every word in every language and needs no list; saying that two runs of letters are the same word is a claim about those two words, and a claim needs to have been checked. Kept apart, the first stays free to use anywhere and the second stays a short list somebody can read.";
  "It hands back the plain word untouched when the list says nothing about it, so a caller can use this everywhere the plain form was used and nothing else changes.";
  arguments_assert(arguments, 1);
  let plain = text_word_plain(word);
  let canonical = text_words_plain_canonical();
  let named = canonical[plain];
  let unlisted = equal(named, undefined);
  if (unlisted) {
    return plain;
  }
  return named;
}
