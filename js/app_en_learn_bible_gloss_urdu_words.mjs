import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { gloss_words_apart_generic } from "./gloss_words_apart_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_words() {
  "Every different English word the Urdu gloss store has explained that the bible also writes as a word, said once each and in small letters, with the pieces of words it explains handed back beside them.";
  "★ THE STORE EXPLAINS THINGS THAT ARE NOT WORDS, AND EVERYTHING HERE IS ABOUT RECORDINGS, SO THEY HAVE TO COME OUT. Romans 1 cuts God's into God and s and explains the s as the suffix that shows possession; it cuts non-Greeks into non and Greeks the same way. Each piece then wants a recording, and no voice says a suffix aloud, so each was a word this app reported missing forever and could never fix. They come back under their own name rather than vanishing.";
  "This is what a sound button costs. A reader learning English wants to hear the word, and a recording belongs to the word rather than to the verse it turned up in, so one list of words covers every chapter already written and most of every chapter still to be written.";
  arguments_assert(arguments, 0);
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let bible_folder = ebible_folder_english();
  let r = await gloss_words_apart_generic(fn, bible_folder);
  return r;
}
