import { app_shared_encouragement_words } from "./app_shared_encouragement_words.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_encouragement_step_exclamation() {
  arguments_assert(arguments, 0);
  ("one word of praise with its exclamation mark and the space after it, ready to have the rest of a sentence written on the end of it");
  ("Taken fresh each time, so praise repeated a few steps running does not read as one recording being played again.");
  let words = app_shared_encouragement_words();
  let word = list_random_item(words);
  let text = text_combine(word, "! ");
  return text;
}
