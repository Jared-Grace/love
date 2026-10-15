import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { gloss_word_sound_url_cycling_generic } from "./gloss_word_sound_url_cycling_generic.mjs";
import { bible_word_voices } from "./bible_word_voices.mjs";
import { bible_word_sound_voice_url } from "./bible_word_sound_voice_url.mjs";
import { bible_word_sound_voice_slow_url } from "./bible_word_sound_voice_slow_url.mjs";
export function bible_word_sound_url_cycling() {
  arguments_assert(arguments, 0);
  ("The two ways of saying a Bible word in the language it was written in - at its own speed and slowly - each taking the next voice in turn, starting from a voice picked at random. Every page that says an original word asks here, so a word sounds the same wherever it is tapped.");
  let start = integer_random(0, 11);
  let cycling = gloss_word_sound_url_cycling_generic(
    bible_word_voices,
    start,
    bible_word_sound_voice_url,
    bible_word_sound_voice_slow_url,
  );
  return cycling;
}
