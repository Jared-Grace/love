import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_words } from "./app_en_learn_bible_gloss_urdu_words.mjs";
import { property_get } from "./property_get.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound } from "./app_en_learn_bible_gloss_urdu_words_sound.mjs";
import { gloss_words_sound_write_generic } from "./gloss_words_sound_write_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_words_sound_write() {
  "Records every English word the Urdu gloss store explains and has no recording of yet, so a reader who cannot read the spelling can hear the word instead.";
  "It finds its own set rather than being handed one: the words come from the store, and the ones already recorded are read off the folder. So it is run after authoring a chapter and it does exactly the words that chapter added, and running it twice over does nothing the second time.";
  "The voice is the one the chapters are read in, which is the reason for recording at all rather than leaving it to whatever voice a phone happens to have installed. A reader in Pakistan hearing a word here and then hearing the chapter read aloud should hear the same person say it, and an Urdu phone may carry no English voice at all.";
  arguments_assert(arguments, 0);
  let found = await app_en_learn_bible_gloss_urdu_words();
  let words = property_get(found, "words");
  let sound_fn = app_en_learn_bible_gloss_urdu_words_sound;
  let r = await gloss_words_sound_write_generic(words, sound_fn);
  return r;
}
