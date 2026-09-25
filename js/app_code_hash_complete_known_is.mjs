import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_hash_complete_released_word } from "./app_code_hash_complete_released_word.mjs";
import { equal } from "./equal.mjs";
export function app_code_hash_complete_known_is(word) {
  arguments_assert(arguments, 1);
  ("Whether a word standing where the complete field goes in a link is one the code app understands.");
  let released = app_code_hash_complete_released_word();
  let known = equal(word, released);
  return known;
}
