import { app_learn_en_gloss_passages_read } from "./app_learn_en_gloss_passages_read.mjs";
import { app_learn_en_gloss_authored_get } from "./app_learn_en_gloss_authored_get.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_write_chapter_file_generic } from "./gloss_write_chapter_file_generic.mjs";
export async function app_learn_en_gloss_write_chapter_file(
  language_code,
  chapter_code,
) {
  "Save a whole chapter of English words explained in the reader's language from one JSON file, keyed by the verses each passage covers.";
  "$plain language_code";
  "the code is a language's short name, like tgl or es. It picks an entry from a fixed list and nothing that runs.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to store and nothing that runs.";
  let passages_read = app_learn_en_gloss_passages_read(language_code);
  let store = app_learn_en_gloss_authored_get(language_code);
  let fn = property_get(store, "generate");
  let r = await gloss_write_chapter_file_generic(
    chapter_code,
    passages_read,
    fn,
  );
  return r;
}
