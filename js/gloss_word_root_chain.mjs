import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function gloss_word_root_chain(known, word) {
  "Every root a dictionary takes one word back to, step after step: the root it gives for the word, then the root it gives for that root, and on until it gives none.";
  "A dictionary that takes words apart one step at a time does not always agree with itself across the steps. Asked about pagpangita it answers pangit, and asked about pangita it answers kita - so the word it hands back for one form is not always a form on the chain it hands back for another. A single step cannot see that; the chain can, because a root reached from the word appears on it and a root reached from nowhere does not.";
  "Every word on the chain is cut down to the bare spelling before it is put there, because the chain exists to be looked in, and a caller asking whether one root stands on it is comparing spellings from two sources that capitalise differently.";
  "It stops on a word already met, so a dictionary saying two words are each other's root ends the walk rather than running for ever. A word nobody has looked up, an entry the dictionary never took apart, and an entry naming no root at all each end it too - all three mean the same thing here, that there is no further step to take, and none of them is a fault.";
  "$plain known";
  "$plain word";
  "the first names a gathered dictionary to read, the second a word to take back to its roots. Neither names anything that runs.";
  arguments_assert(arguments, 2);
  let chain = [];
  let current = gloss_word_bare(word);
  while (true) {
    let held = binisaya_words_known_get(known, current);
    if (null_is(held)) {
      return chain;
    }
    let analysed = property_get(held, "analysed");
    if (not(analysed)) {
      return chain;
    }
    let root = property_get(held, "root");
    let bare = gloss_word_bare(root);
    let nothing = text_empty_is(bare);
    if (nothing) {
      return chain;
    }
    let same = equal(bare, current);
    if (same) {
      return chain;
    }
    let met = list_includes(chain, bare);
    if (met) {
      return chain;
    }
    list_add(chain, bare);
    current = bare;
  }
}
