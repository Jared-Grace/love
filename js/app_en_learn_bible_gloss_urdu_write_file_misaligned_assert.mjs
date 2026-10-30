import { app_en_learn_bible_gloss_urdu_passages } from "./app_en_learn_bible_gloss_urdu_passages.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_passage_words_text_first } from "./gloss_passage_words_text_first.mjs";
import { gloss_write_file_misaligned_assert_generic } from "./gloss_write_file_misaligned_assert_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_write_file_misaligned_assert(
  chapter_code,
  verse_key,
) {
  "Refuse a hand-off file of English words explained in Urdu whose explanations do not line up with the passage's English words, before anything is stored.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.";
  "The words checked against are the first text's, because English is the first of the two bibles the passage carries and it is the English that is being explained - the same reading the gate over this store makes.";
  let passages_read = app_en_learn_bible_gloss_urdu_passages;
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let words_read = gloss_passage_words_text_first;
  await gloss_write_file_misaligned_assert_generic(
    chapter_code,
    verse_key,
    passages_read,
    fn,
    words_read,
  );
}
