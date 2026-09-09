import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_present_parsing_only_wording } from "./app_en_learn_bible_gloss_urdu_present_parsing_only_wording.mjs";
import { equal } from "./equal.mjs";
export function app_en_learn_bible_gloss_urdu_present_parsing_only_is(explain) {
  "Whether one explanation in the store explaining English to an Urdu reader is still nothing but the sentence saying the word is a verb of present time.";
  "$plain explain";
  "the wording is the sentence as it stands in the store. It names nothing that runs.";
  "It is handed to a sweep as the answer to what may be written over, and it is narrow for the reason its past-tense twin gives at length: the same verbs are explained properly in the chapters somebody sat down with, and a settled wording written over those would take away work nobody could get back.";
  "Matching word for word is also what keeps the three stock sentences apart. They differ only in their middle, and a word wearing the bare form carries the present sentence in one verse and the base-form sentence in another - so a match that read only the opening would hand one of them the other's wording.";
  arguments_assert(arguments, 1);
  let wording = app_en_learn_bible_gloss_urdu_present_parsing_only_wording();
  let only = equal(explain, wording);
  return only;
}
