import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_hash_complete_key } from "./app_code_hash_complete_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { app_code_hash_complete_released_word } from "./app_code_hash_complete_released_word.mjs";
import { equal } from "./equal.mjs";
import { app_code_progress_released_complete_mark } from "./app_code_progress_released_complete_mark.mjs";
export function app_code_hash_complete_restore(context, hash) {
  arguments_assert(arguments, 2);
  ("If the link says complete=released, mark every released lesson finished before anything is drawn, so the lesson list opens with only the lessons latest does not have left open.");
  ("Marking is safe to repeat, so a link left in the address bar and reloaded does nothing new.");
  let key = app_code_hash_complete_key();
  let said = property_get_or_null(hash, key);
  let released = app_code_hash_complete_released_word();
  let asked = equal(said, released);
  if (asked) {
    app_code_progress_released_complete_mark(context);
  }
}
