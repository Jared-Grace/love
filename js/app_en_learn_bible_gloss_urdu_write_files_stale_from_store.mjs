import { gloss_write_files_stale_from_store_generic } from "./gloss_write_files_stale_from_store_generic.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_write_files_stale_from_store(
  chapter_code,
) {
  "Write the stored explanations of the store that teaches English to an Urdu reader over every hand-off file of one chapter that disagrees with them - for a chapter whose store has been judged the right side.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names files to read and nothing that runs.";
  let r = await gloss_write_files_stale_from_store_generic(
    chapter_code,
    app_en_learn_bible_gloss_urdu_generate,
  );
  return r;
}
