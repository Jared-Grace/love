import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_store_word_key_read } from "./gloss_store_word_key_read.mjs";
import { gloss_word_keys_reader_one } from "./gloss_word_keys_reader_one.mjs";
import { app_en_learn_bible_gloss_urdu_text_index } from "./app_en_learn_bible_gloss_urdu_text_index.mjs";
import { gloss_chapter_occurrence_claims_wrong_urdu_repair } from "./gloss_chapter_occurrence_claims_wrong_urdu_repair.mjs";
export async function app_en_learn_bible_gloss_urdu_chapter_occurrence_claims_wrong_repair(
  chapter_code,
) {
  "Rewrite every count in one chapter of the store that teaches English through Urdu that says which time over a word has come and that no way of counting reaches, to the number the chapter's own rule gives.";
  "$plain chapter_code";
  "the code is a chapter's name, like GEN31, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "This corrects what is held here. Putting the corrected chapter where readers get it is a separate step.";
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let word_key_read = gloss_store_word_key_read(fn);
  let word_keys_read = gloss_word_keys_reader_one(word_key_read);
  let text_index = app_en_learn_bible_gloss_urdu_text_index();
  let r = await gloss_chapter_occurrence_claims_wrong_urdu_repair(
    chapter_code,
    fn,
    text_index,
    word_keys_read,
  );
  return r;
}
