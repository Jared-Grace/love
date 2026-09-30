import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_sound_voices } from "./gloss_word_sound_voices.mjs";
import { list_random_index } from "./list_random_index.mjs";
import { gloss_word_sound_url_cycling_generic } from "./gloss_word_sound_url_cycling_generic.mjs";
export function gloss_word_sound_url_cycling(url_get, slow_get) {
  "Hands back two ways of asking for one English word's recording, going round the English cast: an ordinary one, which answers in a different person's voice every time it is asked, and a slower one, which takes the next person in the same cycle, so the men and women keep alternating whichever is pressed. Why each of those is so is written on the generic.";
  arguments_assert(arguments, 2);
  let voices = gloss_word_sound_voices();
  function voices_get() {
    return voices;
  }
  let start = list_random_index(voices);
  let r = gloss_word_sound_url_cycling_generic(
    voices_get,
    start,
    url_get,
    slow_get,
  );
  return r;
}
