import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { binisaya_word_root_key_reader } from "./binisaya_word_root_key_reader.mjs";
import { gloss_word_keys_reader_one } from "./gloss_word_keys_reader_one.mjs";
import { app_ceb_bible_gloss_text_index } from "./app_ceb_bible_gloss_text_index.mjs";
import { gloss_chapters_claims_generic } from "./gloss_chapters_claims_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_chapters_claims_generic(
  lambda_claims,
) {
  "Every authored Cebuano chapter asked whatever the caller came to ask, and only the chapters that answered with something named.";
  "The dictionary is opened once for the whole store rather than once a chapter, which is the difference between a sweep of minutes and a sweep of hours.";
  "Chapters nobody has authored yet answer with nothing and so drop out, which is why no list of what is authored has to be kept anywhere.";
  "The root reader answers with one key and the shared reading asks for a list of them, so the one key is handed over as a list of one. Cebuano has nothing to be uncertain about here - a word has a root and the dictionary says which - and the list is only wide enough for the store that does, where one Hebrew shape can belong to two dictionary entries.";
  let known = await binisaya_words_known();
  let word_key_read = binisaya_word_root_key_reader(known);
  let word_keys_read = gloss_word_keys_reader_one(word_key_read);
  let text_index = app_ceb_bible_gloss_text_index();
  let r = await gloss_chapters_claims_generic(
    app_ceb_bible_gloss_generate,
    text_index,
    word_keys_read,
    lambda_claims,
  );
  return r;
}
