import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_store_word_key_read } from "./gloss_store_word_key_read.mjs";
import { gloss_word_keys_reader_one } from "./gloss_word_keys_reader_one.mjs";
import { app_en_learn_bible_gloss_urdu_text_index } from "./app_en_learn_bible_gloss_urdu_text_index.mjs";
import { gloss_chapters_claims_generic } from "./gloss_chapters_claims_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_claims_generic(
  lambda_claims,
) {
  "Every authored chapter of the store that teaches English through Urdu, asked whatever the caller came to ask, and only the chapters that answered with something named.";
  "Chapters nobody has authored yet answer with nothing and so drop out, which is why no list of what is authored has to be kept anywhere.";
  "The words are keyed by their English root, because the words this store explains are the English ones being taught rather than the Urdu they are explained in. The chooser is asked for that rather than it being written out here, so this store and every reading that already keys its words agree by construction.";
  "The root reader answers with one key and the shared reading asks for a list of them, so the one key is handed over as a list of one. English has nothing to be uncertain about here - a word has a root and the rooting says which - and the list is only wide enough for the store that does, where one Hebrew shape can belong to two dictionary entries.";
  arguments_assert(arguments, 1);
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let word_key_read = gloss_store_word_key_read(fn);
  let word_keys_read = gloss_word_keys_reader_one(word_key_read);
  let text_index = app_en_learn_bible_gloss_urdu_text_index();
  let r = await gloss_chapters_claims_generic(
    fn,
    text_index,
    word_keys_read,
    lambda_claims,
  );
  return r;
}
