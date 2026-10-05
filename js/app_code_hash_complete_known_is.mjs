import { app_code_hash_complete_before_word } from "./app_code_hash_complete_before_word.mjs";
import { app_code_hash_complete_latest_word } from "./app_code_hash_complete_latest_word.mjs";
import { list_includes } from "./list_includes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_hash_complete_released_word } from "./app_code_hash_complete_released_word.mjs";
export function app_code_hash_complete_known_is(word) {
  arguments_assert(arguments, 1);
  ("Whether a word standing where the complete field goes in a link is one the code app understands: released, latest, or before.");
  let released = app_code_hash_complete_released_word();
  let latest = app_code_hash_complete_latest_word();
  let before = app_code_hash_complete_before_word();
  let known = list_includes([released, latest, before], word);
  return known;
}
