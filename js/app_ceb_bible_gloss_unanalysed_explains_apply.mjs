import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_unanalysed_explains } from "./app_ceb_bible_gloss_unanalysed_explains.mjs";
import { gloss_chapters_word_explains_set } from "./gloss_chapters_word_explains_set.mjs";
import { gloss_explain_back_reference_is } from "./gloss_explain_back_reference_is.mjs";
export async function app_ceb_bible_gloss_unanalysed_explains_apply() {
  "Write the settled wording for each named unbroken Cebuano word over the explanations of that word that point the reader further up, leaving every other one alone, and answer with the chapters it rewrote.";
  "It writes over a pointer and nothing else, for the same reason the particles and the built-up words do: a wording written for the sentence it sits in is worth more than one settled word-by-word, and taking that out to put this in would be a loss dressed as a repair.";
  let explains = app_ceb_bible_gloss_unanalysed_explains();
  let r = await gloss_chapters_word_explains_set(
    app_ceb_bible_gloss_generate,
    explains,
    gloss_explain_back_reference_is,
  );
  return r;
}
