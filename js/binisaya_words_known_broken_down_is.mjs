import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function binisaya_words_known_broken_down_is(known, word) {
  "Whether the dictionary has an entry for one Cebuano word, as against merely having been asked about it once.";
  "Being held and being a word are two different things, and the gathered answers hold both. Every word the corpus ever met was asked about, and the site answers for a word it does not carry as readily as for one it does - it simply says nothing about where the word comes from. Two thousand four hundred and forty one of the ten thousand five hundred and twenty two answers held are of that second kind, so a reader that asks only whether the word is held counts every one of them as a word the dictionary knows.";
  "That mistake runs in both directions and the second is the worse one. A word never met standing on its own was never asked about, so it is not held at all - and pasaylo, padayag and patalinghog are each a plain entry the site answers for in full, each read as unknown for no reason but that no verse ever used the bare word.";
  "A word nobody has asked about yet answers the same as a word the site had nothing for. Both are honestly not-known-here, and the caller that wants them told apart wants the asking done, not a third answer.";
  arguments_assert(arguments, 2);
  let held = binisaya_words_known_get(known, word);
  let missing = null_is(held);
  if (missing) {
    return false;
  }
  let analysed = property_get(held, "analysed");
  return analysed;
}
