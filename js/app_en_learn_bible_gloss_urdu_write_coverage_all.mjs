import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_passages } from "./app_en_learn_bible_gloss_urdu_passages.mjs";
import { gloss_chapters_write_coverage_generic } from "./gloss_chapters_write_coverage_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_write_coverage_all() {
  "How many chapters the Urdu gloss store holds, and every one of them still carrying passages nobody has explained yet, named by the verses those cover.";
  "This is the answer to which chapter to sit down with next, and it is the only reading that separates a store whose explanations are all correct from a store whose explanations are all written.";
  "It is also what should be read before a chapter is uploaded, because uploading is what puts a chapter in front of a reader here: a chapter listed as waiting has holes, and once it is up the app will offer it anyway.";
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let passages_read = app_en_learn_bible_gloss_urdu_passages;
  let r = await gloss_chapters_write_coverage_generic(fn, passages_read);
  return r;
}
