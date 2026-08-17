import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_chapters_punctuation_entries_repair } from "./gloss_chapters_punctuation_entries_repair.mjs";
export async function app_original_bible_gloss_punctuation_entries_repair() {
  "Drop every explanation in the Hebrew and Greek gloss store that explains a mark rather than a word.";
  "The Cebuano store has had this since the fault was found there, and this one had nothing - so the same fault could sit here and only be noticed by somebody reading a chapter and finding every explanation one word out. Both stores are written the same way by the same hands, and a check that only one of them can be given is a check on the store that happened to be looked at first.";
  "It came back with nothing to drop the first time it was run, which is worth saying rather than leaving to be rediscovered: this is here for what gets authored next, not for a backlog. Reading it back later, a run that changes nothing is the expected answer and not a sign that it failed to reach the store.";
  "Publishing the repaired chapters is a separate step, the same as for the Cebuano store, because it changes what somebody already reading a chapter sees the next time they open it.";
  let fn = app_original_bible_gloss_generate;
  let r = await gloss_chapters_punctuation_entries_repair(fn);
  return r;
}
