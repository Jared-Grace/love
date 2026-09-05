import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_words_generic } from "./gloss_words_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_words() {
  "Every different English word the Urdu gloss store has explained, said once each and in small letters.";
  "This is what a sound button costs. A reader learning English wants to hear the word, and a recording belongs to the word rather than to the verse it turned up in, so one list of words covers every chapter already written and most of every chapter still to be written.";
  arguments_assert(arguments, 0);
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let r = await gloss_words_generic(fn);
  return r;
}
