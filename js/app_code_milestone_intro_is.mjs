import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_code_milestone_begun_key } from "./app_code_milestone_begun_key.mjs";
import { storage_session_get_context } from "./storage_session_get_context.mjs";
import { equal } from "./equal.mjs";
export function app_code_milestone_intro_is(context, checkpoint) {
  arguments_assert(arguments, 2);
  ("whether the review screen shows only the checkpoint's words and a Begin button: when it has words to say, which only a milestone does, and Begin has not been pressed for it in this tab since it was opened from home");
  let explain = property_get(checkpoint, "explain");
  if (list_empty_is(explain)) {
    return false;
  }
  let key_begun = app_code_milestone_begun_key();
  let begun = storage_session_get_context(context, key_begun);
  let key = property_get(checkpoint, "key");
  let pressed = equal(begun, key);
  if (pressed) {
    return false;
  }
  return true;
}
