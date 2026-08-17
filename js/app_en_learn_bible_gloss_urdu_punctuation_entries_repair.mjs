import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_chapters_punctuation_entries_repair } from "./gloss_chapters_punctuation_entries_repair.mjs";
export async function app_en_learn_bible_gloss_urdu_punctuation_entries_repair() {
  "Drop every explanation in the store of English words explained in Urdu that explains a mark rather than a word.";
  "This is the third gloss store and the last one that had no way of being asked. The two before it were given the repair when the fault was found in one of them, and a store nobody can put the question to is not a store that is clean - it is a store nobody looked at.";
  "Publishing the repaired chapters is a separate step, the same as for the other two stores, because it changes what somebody already reading a chapter sees the next time they open it.";
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let r = await gloss_chapters_punctuation_entries_repair(fn);
  return r;
}
