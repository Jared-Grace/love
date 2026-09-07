import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_chapters_words_glosses } from "./gloss_chapters_words_glosses.mjs";
export async function app_en_learn_bible_gloss_urdu_words_glosses(words) {
  "Every Urdu meaning the English-words-explained-in-Urdu store has given each of a list of English words, commonest first.";
  "Ask this before filling a run of blanked meanings. The store is the convention, and the whole list is answered by one reading of it.";
  arguments_assert(arguments, 1);
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let r = await gloss_chapters_words_glosses(fn, words);
  return r;
}
