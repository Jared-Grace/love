import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_words } from "./app_en_learn_bible_gloss_urdu_words.mjs";
import { property_get } from "./property_get.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound } from "./app_en_learn_bible_gloss_urdu_words_sound.mjs";
import { gloss_word_sound_voices } from "./gloss_word_sound_voices.mjs";
import { gloss_words_sound_write_generic } from "./gloss_words_sound_write_generic.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function app_en_learn_bible_gloss_urdu_words_sound_write() {
  "Records every English word the Urdu gloss store explains, in every voice of the cast that has no recording of it yet, so a reader who cannot read the spelling can hear the word instead.";
  "It finds its own set rather than being handed one: the words come from the store, the voices from the cast, and the pairs already recorded are read off the folder. So it is run after authoring a chapter and it does exactly the words that chapter added, and running it twice over does nothing the second time.";
  "★ THE VOICES ARE DONE ONE AFTER ANOTHER RATHER THAN TOGETHER, AND THE REASON IS THE WORKING FOLDER RATHER THAN THE MACHINE. Every run empties the same working folder and nothing a run leaves behind says who spoke it, so two voices going at once would file each other's leftovers. Two of them at once would also want the model in memory twice, on a machine that has already stopped one of these runs dead.";
  "★ THE RECORDINGS ARE MADE HERE AND NOT IN THE VOICE THE CHAPTERS ARE READ IN, WHICH USED TO BE THE WHOLE POINT OF MAKING THEM. The old reasoning was that a reader who taps a word and then hears the chapter should hear the same person, and that reasoning is now outvoted by a better one: a learner who only ever hears one mouth has learned that mouth rather than the word. So a word is said by four different people in turn, and the chapters go on being read by whoever reads them.";
  "It reports one line per voice rather than one number, because a run that stopped after the second voice and a run that had nothing to do are otherwise the same answer.";
  arguments_assert(arguments, 0);
  let found = await app_en_learn_bible_gloss_urdu_words();
  let words = property_get(found, "words");
  let sound_fn = app_en_learn_bible_gloss_urdu_words_sound;
  let voices = gloss_word_sound_voices();
  let done = [];
  async function voice_each(voice) {
    let made = await gloss_words_sound_write_generic(words, sound_fn, voice);
    list_add(done, made);
  }
  await each_async(voices, voice_each);
  return done;
}
