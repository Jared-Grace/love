import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_base_verb_explains } from "./app_en_learn_bible_gloss_urdu_base_verb_explains.mjs";
import { gloss_chapters_word_explains_set } from "./gloss_chapters_word_explains_set.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_base_parsing_only_is } from "./app_en_learn_bible_gloss_urdu_base_parsing_only_is.mjs";
export async function app_en_learn_bible_gloss_urdu_base_verb_explains_apply() {
  "Write the settled wording for each named base-form English verb over every explanation of that word that still says only that it is a verb in its basic shape, and answer with the chapters it rewrote.";
  "It takes no list from the caller and reads none of its own: the words and their wordings are written down together in one place, so running it again after that place grows covers the new words and asks nothing twice.";
  "ONLY THE BARE PARSING IS WRITTEN OVER. Every other explanation of these words is left exactly as it stands, because the chapters somebody sat down with already explain them for the verse they are in, and that is better than any settled sentence can be. What is being replaced is the sentence that was handed out where nobody sat down.";
  "This is the third and last of the three stock parsing sentences. Most of these words are spelled exactly as their own present tense and several as their own past, so the predicate this hands over reads the sentence rather than the word, and the two passes before it are what make that safe: a word whose present entries were rewritten first can no longer be reached by this one at all.";
  arguments_assert(arguments, 0);
  let explains = app_en_learn_bible_gloss_urdu_base_verb_explains();
  let r = await gloss_chapters_word_explains_set(
    app_en_learn_bible_gloss_urdu_generate,
    explains,
    app_en_learn_bible_gloss_urdu_base_parsing_only_is,
  );
  return r;
}
