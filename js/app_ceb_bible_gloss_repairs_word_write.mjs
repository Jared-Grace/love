import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_repairs_word_write_generic } from "./gloss_repairs_word_write_generic.mjs";
export async function app_ceb_bible_gloss_repairs_word_write(word, explain) {
  "One settled Cebuano explanation written into the handover file for a single word, against every chapter that holds it.";
  "$plain word";
  "$plain explain";
  "Nothing in the store changes here. Read what comes back, look at the file, and then hand it over with the repair.";
  let fn = app_ceb_bible_gloss_generate;
  let r = await gloss_repairs_word_write_generic(fn, word, explain);
  return r;
}
