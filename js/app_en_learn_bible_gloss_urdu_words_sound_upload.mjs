import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound } from "./app_en_learn_bible_gloss_urdu_words_sound.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_upload_path } from "./app_en_learn_bible_gloss_urdu_words_sound_upload_path.mjs";
import { gloss_words_sound_upload_generic } from "./gloss_words_sound_upload_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_words_sound_upload() {
  "Publishes every recording of an English word that has been made so far, so a reader of the Urdu explanations can tap a word and hear it said.";
  "It is the step after recording and it is separate on purpose: recording takes hours and happens on this machine, publishing takes minutes and is what a reader is actually waiting on. Run it whenever more words have been recorded - it finds its own set by reading the folder, so there is no list to keep in line.";
  "Bump the stamp in the same commit when a recording has been made again rather than merely added, or the phones that have already been here will go on playing the old one.";
  arguments_assert(arguments, 0);
  let sound_fn = app_en_learn_bible_gloss_urdu_words_sound;
  let path_get = app_en_learn_bible_gloss_urdu_words_sound_upload_path;
  let r = await gloss_words_sound_upload_generic(sound_fn, path_get);
  return r;
}
