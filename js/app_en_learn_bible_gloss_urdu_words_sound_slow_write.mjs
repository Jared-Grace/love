import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound } from "./app_en_learn_bible_gloss_urdu_words_sound.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_slow } from "./app_en_learn_bible_gloss_urdu_words_sound_slow.mjs";
import { gloss_words_sound_slow_write_generic } from "./gloss_words_sound_slow_write_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_words_sound_slow_write() {
  "Makes the slower reading of every English word the Urdu gloss reader can tap, so a learner who did not catch a word can ask for it again more clearly.";
  "It is the step after recording and before publishing. Run it whenever more words have been recorded - it finds its own set by reading the folders, so there is no list to keep in line, and a word already slowed is left alone.";
  "Bump the slow readings' own stamp in the same commit as the upload when the way of slowing has changed rather than when words have merely been added, or the phones that have already been here will go on playing the old one.";
  arguments_assert(arguments, 0);
  let sound_fn = app_en_learn_bible_gloss_urdu_words_sound;
  let slow_fn = app_en_learn_bible_gloss_urdu_words_sound_slow;
  let r = await gloss_words_sound_slow_write_generic(sound_fn, slow_fn);
  return r;
}
