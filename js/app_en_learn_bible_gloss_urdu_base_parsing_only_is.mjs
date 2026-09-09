import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_base_parsing_only_wording } from "./app_en_learn_bible_gloss_urdu_base_parsing_only_wording.mjs";
import { equal } from "./equal.mjs";
export function app_en_learn_bible_gloss_urdu_base_parsing_only_is(explain) {
  "Whether one explanation in the store explaining English to an Urdu reader is still nothing but the sentence saying the word is a verb in its basic shape.";
  "$plain explain";
  "the wording is the sentence as it stands in the store. It names nothing that runs.";
  "It is handed to a sweep as the answer to what may be written over, and it is narrow for the reason its past-tense twin gives at length: the same verbs are explained properly in the chapters somebody sat down with, and a settled wording written over those would take away work nobody could get back.";
  "THIS IS THE ONE OF THE THREE WHERE A WIDE MATCH WOULD DO REAL DAMAGE. Most of these words are spelled exactly as their own present tense - 'say', 'go', 'eat', 'know' - and several as their own past as well, because 'put', 'cut' and 'read' never change. So the very same spelling stands in this store wearing all three stock sentences at different places, and what tells them apart is nothing about the word: it is which sentence the entry is carrying. Matching word for word is what reads that, and reading only the opening would hand a word the tense it does not have there.";
  arguments_assert(arguments, 1);
  let wording = app_en_learn_bible_gloss_urdu_base_parsing_only_wording();
  let only = equal(explain, wording);
  return only;
}
