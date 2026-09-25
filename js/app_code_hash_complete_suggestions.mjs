import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_hash_complete_released_word } from "./app_code_hash_complete_released_word.mjs";
export function app_code_hash_complete_suggestions(word) {
  arguments_assert(arguments, 1);
  ("What to offer a reader whose link wrote something the complete field does not understand: the one word it does, whatever they wrote.");
  let released = app_code_hash_complete_released_word();
  let offered = [released];
  return offered;
}
