import { app_en_learn_bible_gloss_tagalog_generate } from "./app_en_learn_bible_gloss_tagalog_generate.mjs";
import { app_en_learn_bible_gloss_tagalog_passages } from "./app_en_learn_bible_gloss_tagalog_passages.mjs";
import { gloss_write_coverage_generic } from "./gloss_write_coverage_generic.mjs";
export async function app_en_learn_bible_gloss_tagalog_write_coverage(
  chapter_code,
) {
  "Which of a chapter's passages already carry English words explained in Tagalog and which are still waiting, named by the verses each one covers.";
  "The gates over this store pass an unauthored passage on purpose - nothing lines up wrongly when there is nothing to line up - so this is the one that says a chapter is finished, and it is read before a chapter is published.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  let fn = app_en_learn_bible_gloss_tagalog_generate;
  let passages_read = app_en_learn_bible_gloss_tagalog_passages;
  let r = await gloss_write_coverage_generic(chapter_code, fn, passages_read);
  return r;
}
