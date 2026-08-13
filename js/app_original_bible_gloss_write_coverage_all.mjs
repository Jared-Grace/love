import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_passages } from "./app_original_bible_gloss_passages.mjs";
import { gloss_chapters_write_coverage_generic } from "./gloss_chapters_write_coverage_generic.mjs";
export async function app_original_bible_gloss_write_coverage_all() {
  "Every chapter of the original-language gloss store with how many passages are authored and which verses are still waiting.";
  "It exists beside the Cebuano one rather than only where it was first wanted, because a reading present for one store and absent for its twin is how the two stores drifted into needing different commands in the first place.";
  let fn = app_original_bible_gloss_generate;
  let passages_read = app_original_bible_gloss_passages;
  let r = await gloss_chapters_write_coverage_generic(fn, passages_read);
  return r;
}
