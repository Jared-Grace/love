import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_past_parsing_only_wording } from "./app_en_learn_bible_gloss_urdu_past_parsing_only_wording.mjs";
import { equal } from "./equal.mjs";
export function app_en_learn_bible_gloss_urdu_past_parsing_only_is(explain) {
  "Whether one explanation in the store explaining English to an Urdu reader is still nothing but the sentence saying the word is a verb of past time.";
  "$plain explain";
  "the wording is the sentence as it stands in the store. It names nothing that runs.";
  "IT IS HANDED TO A SWEEP AS THE ANSWER TO WHAT MAY BE WRITTEN OVER, AND IT IS NARROW ON PURPOSE. The sweep beside it in the Cebuano store lets anything be written over, and says in its own prose that this is right only where every explanation of the word was worthless. It is not right here. The same verbs are explained properly in the chapters somebody sat down with - 'came' carries a sentence about old verbs changing inside, written for the verse it stands in - and a settled wording written over those would take away work nobody could get back and no reading afterwards could show had ever been done.";
  "IT ALSO REFUSES THE PRESENT-TENSE AND BASE-FORM SENTENCES, WHICH LOOK LIKE THIS ONE AND ARE NOT. Four of the words carrying the past sentence carry an unchanging spelling - 'set', 'put', 'spread', 'wet' - so the very same word stands elsewhere in the store as a base form with its own sentence, and a wider match would hand it a wording that says it is past. Those two would then disagree about the same word in the same store.";
  "Word for word rather than by what the sentence starts with, because what is being asked is whether anybody has touched it, and a sentence somebody has added half a line to is one they touched.";
  arguments_assert(arguments, 1);
  let wording = app_en_learn_bible_gloss_urdu_past_parsing_only_wording();
  let only = equal(explain, wording);
  return only;
}
