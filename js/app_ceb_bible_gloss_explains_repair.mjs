import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_explains_repair_generic } from "./gloss_explains_repair_generic.mjs";
export async function app_ceb_bible_gloss_explains_repair() {
  "The Cebuano word explanations named in the repairs file put right where they stand, and what it could not find.";
  "This is what a reading of the whole store is for. The checks say which explanations are wrong and the reading says which of those are worth a person's time; nothing changes until the corrected sentences are written and handed back, and this is the hand-back.";
  "Read what comes back rather than the exit. A word the store does not hold is not an error here - it is a word named wrong in the repairs file, and the file is the thing to correct.";
  let fn = app_ceb_bible_gloss_generate;
  let r = await gloss_explains_repair_generic(fn);
  return r;
}
