import { app_en_learn_bible_gloss_tagalog_passages } from "./app_en_learn_bible_gloss_tagalog_passages.mjs";
import { app_en_learn_bible_gloss_passages_words_generic } from "./app_en_learn_bible_gloss_passages_words_generic.mjs";
export async function app_en_learn_bible_gloss_tagalog_passages_words(
  chapter_code,
) {
  "The passages of one chapter handed over ready to author English words explained in Tagalog against - the key to file each under, its texts, its English words cut the way the store cuts them, and how many there are.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  let passages_read = app_en_learn_bible_gloss_tagalog_passages;
  let r = await app_en_learn_bible_gloss_passages_words_generic(
    chapter_code,
    passages_read,
  );
  return r;
}
