import { app_learn_ceb_gloss_generate } from "./app_learn_ceb_gloss_generate.mjs";
import { app_learn_ceb_gloss_passages } from "./app_learn_ceb_gloss_passages.mjs";
import { gloss_write_chapter_file_generic } from "./gloss_write_chapter_file_generic.mjs";
export async function app_learn_ceb_gloss_write_chapter_file(chapter_code) {
  "Save a whole Cebuano chapter's authored word explanations from one JSON file, keyed by the verses each passage covers.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to store and nothing that runs.";
  let passages_read = app_learn_ceb_gloss_passages;
  let fn = app_learn_ceb_gloss_generate;
  let r = await gloss_write_chapter_file_generic(
    chapter_code,
    passages_read,
    fn,
  );
  return r;
}
