import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_slow } from "./app_en_learn_bible_gloss_urdu_words_sound_slow.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_slow_upload_path } from "./app_en_learn_bible_gloss_urdu_words_sound_slow_upload_path.mjs";
import { gloss_words_sound_upload_generic } from "./gloss_words_sound_upload_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_words_sound_slow_upload() {
  "Publishes every slower reading of an English word that has been made so far, so a reader of the Urdu explanations who did not catch a word can ask to hear it again more clearly.";
  "It is the step after slowing and it is separate on purpose, for the same reason the ordinary one is: making them takes minutes on this machine, publishing them is what a reader is actually waiting on. Run it whenever more words have been slowed - it finds its own set by reading the folder, so there is no list to keep in line.";
  "Bump the slow readings' stamp in the same commit when a reading has been made again rather than merely added, or the phones that have already been here will go on playing the old one.";
  arguments_assert(arguments, 0);
  let sound_fn = app_en_learn_bible_gloss_urdu_words_sound_slow;
  let path_get = app_en_learn_bible_gloss_urdu_words_sound_slow_upload_path;
  let r = await gloss_words_sound_upload_generic(sound_fn, path_get);
  return r;
}
