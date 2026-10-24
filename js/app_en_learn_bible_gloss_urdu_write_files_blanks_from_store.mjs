import { gloss_write_files_blanks_from_store_generic } from "./gloss_write_files_blanks_from_store_generic.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_write_files_blanks_from_store(
  chapter_code,
) {
  "Carry the meanings the store that teaches English to an Urdu reader was given for blank words back into one chapter's hand-off files, so the stale repair cannot write the blanks back.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names files to read and nothing that runs.";
  let r = await gloss_write_files_blanks_from_store_generic(
    chapter_code,
    app_en_learn_bible_gloss_urdu_generate,
  );
  return r;
}
