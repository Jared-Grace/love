import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_passages } from "./app_en_learn_bible_gloss_urdu_passages.mjs";
import { gloss_write_chapter_file_generic } from "./gloss_write_chapter_file_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_write_chapter_file(
  chapter_code,
) {
  "Save a whole chapter of English words explained in Urdu from one JSON file, keyed by the verses each passage covers.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to store and nothing that runs.";
  let passages_read = app_en_learn_bible_gloss_urdu_passages;
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let r = await gloss_write_chapter_file_generic(
    chapter_code,
    passages_read,
    fn,
  );
  return r;
}
