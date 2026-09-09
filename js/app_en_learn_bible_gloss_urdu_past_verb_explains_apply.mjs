import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_past_verb_explains } from "./app_en_learn_bible_gloss_urdu_past_verb_explains.mjs";
import { gloss_chapters_word_explains_set } from "./gloss_chapters_word_explains_set.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_past_parsing_only_is } from "./app_en_learn_bible_gloss_urdu_past_parsing_only_is.mjs";
export async function app_en_learn_bible_gloss_urdu_past_verb_explains_apply() {
  "Write the settled wording for each named past-tense English verb over every explanation of that word that still says only that it is a verb of past time, and answer with the chapters it rewrote.";
  "It takes no list from the caller and reads none of its own: the words and their wordings are written down together in one place, so running it again after that place grows covers the new words and asks nothing twice.";
  "ONLY THE BARE PARSING IS WRITTEN OVER. Every other explanation of these words is left exactly as it stands, because the chapters somebody sat down with already explain them for the verse they are in, and that is better than any settled sentence can be. What is being replaced is the sentence that was handed out where nobody sat down.";
  arguments_assert(arguments, 0);
  let explains = app_en_learn_bible_gloss_urdu_past_verb_explains();
  let r = await gloss_chapters_word_explains_set(
    app_en_learn_bible_gloss_urdu_generate,
    explains,
    app_en_learn_bible_gloss_urdu_past_parsing_only_is,
  );
  return r;
}
