import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_passages } from "./app_ceb_bible_gloss_passages.mjs";
import { gloss_chapters_write_coverage_generic } from "./gloss_chapters_write_coverage_generic.mjs";
export async function app_ceb_bible_gloss_write_coverage_all() {
  "Every chapter of the Cebuano gloss store with how many passages are authored and which verses are still waiting.";
  "This is the answer to which chapter to sit down with next, and it is the only reading that separates a store whose explanations are all correct from a store whose explanations are all written.";
  let fn = app_ceb_bible_gloss_generate;
  let passages_read = app_ceb_bible_gloss_passages;
  let r = await gloss_chapters_write_coverage_generic(fn, passages_read);
  return r;
}
