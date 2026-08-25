import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_passages } from "./app_en_learn_bible_gloss_urdu_passages.mjs";
import { gloss_write_coverage_generic } from "./gloss_write_coverage_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_write_coverage(
  chapter_code,
) {
  "Which of a chapter's passages already carry English words explained in Urdu and which are still waiting, named by the verses each one covers.";
  "The gate over this store passes an unauthored passage on purpose - nothing lines up wrongly when there is nothing to line up - so a green store and a finished store are two different answers, and this is the one that tells them apart.";
  "It matters more here than in the stores this copies, because this app now offers a reader only the chapters that have been published: an unfinished chapter that went up is a chapter offered and opened on gaps, and nothing else says it is unfinished.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let passages_read = app_en_learn_bible_gloss_urdu_passages;
  let r = await gloss_write_coverage_generic(chapter_code, fn, passages_read);
  return r;
}
