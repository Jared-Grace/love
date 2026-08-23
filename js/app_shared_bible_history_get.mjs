import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_history_key } from "./app_shared_bible_history_key.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { null_is } from "./null_is.mjs";
export function app_shared_bible_history_get(context) {
  "The readings this app has been left on, on this device, newest first - each one a chapter and the verses that were picked in it, written down by the tab that was on it.";
  "Nothing kept yet answers as an empty list rather than as nothing at all. Somebody who has only just opened this has a history; it is simply empty, and every caller here wants to go on and draw an empty list rather than stop and test for a missing one.";
  arguments_assert(arguments, 1);
  let key = app_shared_bible_history_key();
  let kept = storage_local_get_context(context, key);
  let nothing = null_is(kept);
  if (nothing) {
    let none = [];
    return none;
  }
  return kept;
}
