import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_store_word_key_read } from "./gloss_store_word_key_read.mjs";
import { app_original_bible_gloss_text_index } from "./app_original_bible_gloss_text_index.mjs";
import { app_original_bible_gloss_passages_texted } from "./app_original_bible_gloss_passages_texted.mjs";
import { gloss_chapters_claims_generic } from "./gloss_chapters_claims_generic.mjs";
export async function app_original_bible_gloss_chapters_claims_generic(
  lambda_claims,
) {
  "Every authored chapter of the store that explains the Hebrew and the Greek, asked whatever the caller came to ask, and only the chapters that answered with something named.";
  "Chapters nobody has authored yet answer with nothing and so drop out, which is why no list of what is authored has to be kept anywhere.";
  "The passages are laid out before the question is asked of them, because this store keeps the wording under explanation beside its texts rather than among them. Every caller would otherwise have to remember to do that, and the one who forgot would be told the store was clean.";
  "The words are keyed by a fold of capitals and nothing more, which is what every store but the Urdu one uses. Hebrew and Greek are written with their own letters and their own marks, so two forms of one word meet here only where they are spelled the same way - and an explanation pointing at another form of its word will come back as a claim not held. That is a queue to read rather than a fault, and it is the same shape the other two stores already answer in.";
  arguments_assert(arguments, 1);
  let fn = app_original_bible_gloss_generate;
  let word_key_read = gloss_store_word_key_read(fn);
  let text_index = app_original_bible_gloss_text_index();
  function claims_read(passages, index, key_read) {
    let texted = app_original_bible_gloss_passages_texted(passages);
    let found = lambda_claims(texted, index, key_read);
    return found;
  }
  let r = await gloss_chapters_claims_generic(
    fn,
    text_index,
    word_key_read,
    claims_read,
  );
  return r;
}
