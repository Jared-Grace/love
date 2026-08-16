import { app_shared_encouragement_step_words } from "./app_shared_encouragement_step_words.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_encouragement_step_exclamation() {
  arguments_assert(arguments, 0);
  ("one word of praise for a step that was right, with its exclamation mark and the space after it, ready to have the rest of a sentence written on the end of it");
  ("Taken fresh each time, so praise repeated a few steps running does not read as one recording being played again.");
  ("Read from the words said DURING a piece of work, not from the ones said at the end of it, because this is written on the front of a sentence that goes on to name the next thing to do.");
  let words = app_shared_encouragement_step_words();
  let word = list_random_item(words);
  let text = text_combine(word, "! ");
  return text;
}
