import { app_learn_en_gloss_authored_get } from "./app_learn_en_gloss_authored_get.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_en_gloss_passages_read } from "./app_learn_en_gloss_passages_read.mjs";
import { gloss_write_coverage_generic } from "./gloss_write_coverage_generic.mjs";
export async function app_learn_en_gloss_write_coverage(
  language_code,
  chapter_code,
) {
  "Which of a chapter's passages already carry English words explained in the reader's language and which are still waiting, named by the verses each one covers.";
  "The gates over this store pass an unauthored passage on purpose - nothing lines up wrongly when there is nothing to line up - so this is the one that says a chapter is finished, and it is read before a chapter is published.";
  "$plain language_code";
  "the code is a language's short name, like tgl or es. It picks an entry from a fixed list and nothing that runs.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  let store = app_learn_en_gloss_authored_get(language_code);
  let fn = property_get(store, "generate");
  let passages_read = app_learn_en_gloss_passages_read(language_code);
  let r = await gloss_write_coverage_generic(chapter_code, fn, passages_read);
  return r;
}
