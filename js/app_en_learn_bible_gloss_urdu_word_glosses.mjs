import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_chapters_word_glosses } from "./gloss_chapters_word_glosses.mjs";
export async function app_en_learn_bible_gloss_urdu_word_glosses(word) {
  "$plain word";
  "Every Urdu meaning the English-words-explained-in-Urdu store has given one English word, commonest first.";
  "Ask this before glossing a word another chapter has already met. The store is the convention, and a word answered two ways teaches a reader that the two are different words.";
  arguments_assert(arguments, 1);
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let r = await gloss_chapters_word_glosses(fn, word);
  return r;
}
