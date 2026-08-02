import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_verse_words } from "./app_code_verse_words.mjs";
import { list_map } from "./list_map.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
export function app_code_verse_words_letters_only() {
  arguments_assert(arguments, 0);
  ("The words of the shared verse with everything but their letters taken off.");
  ("The lessons that teach what a name may be made of draw their words from here.");
  ("A comma or a full stop riding along on a word would be a symbol the lesson");
  ("never taught, and the learner would be asked about it as though it belonged.");
  ("So the verse as it is written is never what these lessons hand out.");
  let words = app_code_verse_words();
  let letters = list_map(words, text_letters_only);
  return letters;
}
