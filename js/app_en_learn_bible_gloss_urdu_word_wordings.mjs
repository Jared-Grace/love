import { gloss_store_word_wordings } from "./gloss_store_word_wordings.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_explain_pointer_is } from "./app_en_learn_bible_gloss_urdu_explain_pointer_is.mjs";
export async function app_en_learn_bible_gloss_urdu_word_wordings() {
  "The settled Urdu wording the English-to-Urdu gloss store gives each English word - the one written for it most often anywhere in the store, leaving out the ones that only point the reader back at a word met earlier.";
  "The store and the reading of what counts as a pointer are named here rather than asked for, because there is one of each and a caller that had to supply them could supply a pair that do not belong together.";
  let settled = await gloss_store_word_wordings(
    app_en_learn_bible_gloss_urdu_generate,
    app_en_learn_bible_gloss_urdu_explain_pointer_is,
  );
  return settled;
}
