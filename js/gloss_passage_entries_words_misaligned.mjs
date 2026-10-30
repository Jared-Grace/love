import { object_copy } from "./object_copy.mjs";
import { gloss_passage_entries_set } from "./gloss_passage_entries_set.mjs";
import { gloss_passage_words_misaligned } from "./gloss_passage_words_misaligned.mjs";
export function gloss_passage_entries_words_misaligned(
  passage,
  entries,
  words_read,
) {
  "Where the given word explanations would stop lining up with the passage, or nothing when they would line up all the way through.";
  "The explanations are handed in rather than read out of the passage, so a set can be checked before it is stored - which is the moment a fault is cheapest, because nothing has been published over it yet.";
  "The check is asked of a copy holding the new explanations, so it is the very check the gate over the store runs afterwards, and the passage handed in is left as it was.";
  let copy = object_copy(passage);
  gloss_passage_entries_set(copy, entries);
  let r = gloss_passage_words_misaligned(copy, words_read);
  return r;
}
