import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_passages } from "./app_ceb_bible_gloss_passages.mjs";
import { gloss_write_coverage_generic } from "./gloss_write_coverage_generic.mjs";
export async function app_ceb_bible_gloss_write_coverage(chapter_code) {
  "Which of a Cebuano chapter's passages already carry authored word explanations and which are still waiting, named by the verses each one covers.";
  "The alignment gate over this store passes an unauthored passage on purpose - nothing lines up wrongly when there is nothing to line up - so a green store and a finished store are two different answers, and this is the one that tells them apart.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  let fn = app_ceb_bible_gloss_generate;
  let passages_read = app_ceb_bible_gloss_passages;
  let r = await gloss_write_coverage_generic(chapter_code, fn, passages_read);
  return r;
}
