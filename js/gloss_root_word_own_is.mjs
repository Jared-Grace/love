import { text_lower_to } from "./text_lower_to.mjs";
import { equal } from "./equal.mjs";
export function gloss_root_word_own_is(word, root) {
  "Whether the root an outside dictionary gives a word is just the word's own spelling back again.";
  "Where it is, the dictionary is offering no origin at all, so there is nothing for an explanation to agree or disagree with and the word is not worth asking about. The comparison is made in small letters because a root is always written that way, and a word standing at the head of a sentence is not.";
  let word_lower = text_lower_to(word);
  let same = equal(root, word_lower);
  return same;
}
