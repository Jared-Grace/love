import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_words } from "./text_words.mjs";
export function bible_speech_narration_words(text) {
  "A run of narration reduced to its bare lowercase words, with every mark of punctuation gone, so a word can be compared to a word.";
  "Punctuation is stripped rather than kept because a comma welded to the end of said is a different string from said, and a list of verbs cannot be written to expect every mark that might follow one.";
  arguments_assert(arguments, 1);
  let lowered = text_lower_to(text);
  let letters = lowered.replace(/[^a-z ]+/g, " ");
  let words = text_words(letters);
  return words;
}
