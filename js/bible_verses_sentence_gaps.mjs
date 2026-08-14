import { arguments_assert } from "./arguments_assert.mjs";
import { bible_verses_ends } from "./bible_verses_ends.mjs";
import { bible_ends_sentence_gaps } from "./bible_ends_sentence_gaps.mjs";
export function bible_verses_sentence_gaps(verses) {
  "For each verse in a run of one bible, how many verses on the sentence it sits in finishes - the count of extra verses a passage cut there would be carried on by.";
  "One bible is the simple case of the same question a reader of several asks, so the counting is not done here. This says only what finishing means when there is one bible to ask, and hands the run of answers on.";
  arguments_assert(arguments, 1);
  let ends = bible_verses_ends(verses);
  let measured = bible_ends_sentence_gaps(ends);
  return measured;
}
