import { app_learn_en_gloss_passages_read } from "./app_learn_en_gloss_passages_read.mjs";
import { app_learn_en_gloss_passages_words_generic } from "./app_learn_en_gloss_passages_words_generic.mjs";
export async function app_learn_en_gloss_passages_words(
  language_code,
  chapter_code,
) {
  "The passages of one chapter handed over ready to author English words explained in the reader's language against - the key to file each under, its texts, its English words cut the way the store cuts them, and how many there are.";
  "$plain language_code";
  "the code is a language's short name, like tgl or es. It picks an entry from a fixed list and nothing that runs.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  let passages_read = app_learn_en_gloss_passages_read(language_code);
  let r = await app_learn_en_gloss_passages_words_generic(
    chapter_code,
    passages_read,
  );
  return r;
}
