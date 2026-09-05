import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function gloss_word_sound_key(word) {
  "$plain word";
  "The name a recording of one word is filed under - the word in small letters, with anything that is not a letter, a digit or a hyphen written as an underline.";
  "★ THE WORD ITSELF IS THE ADDRESS, AND ITS PLACE IN A LIST IS NOT. The obvious cheap answer is to number the recordings the way the engine numbers them, and it breaks the day a new chapter adds a word: the list is in order, so a word arriving at the front moves every recording after it and every address already handed out then points at the wrong sound. Nothing says so. Filing under the word means a new word takes a new name and every old name still holds.";
  "The underline is there because a recording has to be asked for over a network, where an apostrophe is not the character that was written. Small letters for the same reason the word list is in small letters: a capital belongs to the sentence rather than to the word, so the same word opening a verse must not want a second recording.";
  "★ THE RULE IS NOT ONE-TO-ONE BY CONSTRUCTION AND SO IT IS CHECKED RATHER THAN ASSUMED. Two different words could in principle be written the same way here, and the two would then share one sound in silence. It cannot happen for the words on this disk today - that was measured - but a measurement over today's words says nothing about tomorrow's, so `gloss_word_sound_keys_gate_run` re-asks the question over whatever the store holds now.";
  arguments_assert(arguments, 1);
  let lower = text_lower_to(word);
  let unsafe = new RegExp("[^a-z0-9-]", "g");
  let key = lower.replace(unsafe, "_");
  return key;
}
