import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_roots_disagreeing } from "./gloss_chapters_roots_disagreeing.mjs";
export async function app_ceb_bible_gloss_roots_disagreeing() {
  "Every Cebuano explanation that says nothing about the root binisaya.com takes its word back to, over whatever of the vocabulary has been looked up so far.";
  let r = await gloss_chapters_roots_disagreeing(app_ceb_bible_gloss_generate);
  return r;
}
