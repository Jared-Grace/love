import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_back_references } from "./gloss_chapters_back_references.mjs";
export async function app_ceb_bible_gloss_back_references() {
  "Every Cebuano explanation that points the reader further up instead of saying the thing itself.";
  let r = await gloss_chapters_back_references(app_ceb_bible_gloss_generate);
  return r;
}
