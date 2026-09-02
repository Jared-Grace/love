import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_words } from "./text_words.mjs";
export function bible_speech_narration_words(text) {
  "A run of narration reduced to its bare lowercase words, with every mark of punctuation gone, so a word can be compared to a word.";
  "Punctuation is stripped rather than kept because a comma welded to the end of said is a different string from said, and a list of verbs cannot be written to expect every mark that might follow one.";
  "It reads the Latin alphabet and nothing else. Every letter outside a to z is thrown away along with the punctuation, so writing in another script comes back as an empty list of words rather than as a complaint. Asked for a line of the Urdu bible and for a line of the Greek, it answered nothing both times.";
  "That is worth writing down because the report this feeds is handed the name of its bible and will take any of them. A translation in another script does not come back as unreadable; it comes back as a bible in which nobody is ever said to have spoken. A wrong number hides far better than a missing one, so the bound is said here instead of being left to be found.";
  arguments_assert(arguments, 1);
  let lowered = text_lower_to(text);
  let letters = lowered.replace(new RegExp("[^a-z ]+", "g"), " ");
  let words = text_words(letters);
  return words;
}
