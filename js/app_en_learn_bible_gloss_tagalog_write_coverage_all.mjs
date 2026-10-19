import { app_en_learn_bible_gloss_tagalog_generate } from "./app_en_learn_bible_gloss_tagalog_generate.mjs";
import { app_en_learn_bible_gloss_tagalog_passages } from "./app_en_learn_bible_gloss_tagalog_passages.mjs";
import { gloss_chapters_write_coverage_generic } from "./gloss_chapters_write_coverage_generic.mjs";
export async function app_en_learn_bible_gloss_tagalog_write_coverage_all() {
  "How many chapters the Tagalog gloss store holds, and every one of them still carrying passages nobody has explained yet, named by the verses those cover.";
  "Read it before uploading, because uploading is what puts a chapter in front of a reader: a chapter listed as waiting has holes.";
  let fn = app_en_learn_bible_gloss_tagalog_generate;
  let passages_read = app_en_learn_bible_gloss_tagalog_passages;
  let r = await gloss_chapters_write_coverage_generic(fn, passages_read);
  return r;
}
