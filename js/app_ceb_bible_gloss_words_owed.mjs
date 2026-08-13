import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_words_owed } from "./gloss_words_owed.mjs";
export async function app_ceb_bible_gloss_words_owed() {
  "Every Cebuano word still owed an explanation, commonest first, each one carrying what the dictionary was able to say about it.";
  let r = await gloss_words_owed(app_ceb_bible_gloss_generate);
  return r;
}
