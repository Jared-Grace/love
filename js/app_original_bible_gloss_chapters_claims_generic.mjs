import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { bible_interlinear_original_strongs } from "./bible_interlinear_original_strongs.mjs";
import { gloss_original_word_key_read } from "./gloss_original_word_key_read.mjs";
import { app_original_bible_gloss_text_index } from "./app_original_bible_gloss_text_index.mjs";
import { app_original_bible_gloss_passages_texted } from "./app_original_bible_gloss_passages_texted.mjs";
import { gloss_chapters_claims_generic } from "./gloss_chapters_claims_generic.mjs";
export async function app_original_bible_gloss_chapters_claims_generic(
  lambda_claims,
) {
  "Every authored chapter of the store that explains the Hebrew and the Greek, asked whatever the caller came to ask, and only the chapters that answered with something named.";
  "Chapters nobody has authored yet answer with nothing and so drop out, which is why no list of what is authored has to be kept anywhere.";
  "The passages are laid out before the question is asked of them, because this store keeps the wording under explanation beside its texts rather than among them. Every caller would otherwise have to remember to do that, and the one who forgot would be told the store was clean.";
  "The words are met by their dictionary entry rather than by their spelling, which is what these two languages need and what neither of the other stores uses. Measured on 2026-09-25, keying by spelling called eighty-five claims in every hundred wrong here against twenty in the Urdu store, and the whole of that gap was one word's ending moving between two verses.";
  "The dictionary is opened once and handed to every chapter, because it is read out of the whole interlinear and that is the slow part. Opening it per chapter would pay the same reading four hundred times over.";
  arguments_assert(arguments, 1);
  let fn = app_original_bible_gloss_generate;
  let strongs = await bible_interlinear_original_strongs();
  let word_key_read = gloss_original_word_key_read(strongs);
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
