import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_screen_tab_key_last } from "./app_shared_screen_tab_key_last.mjs";
import { storage_session_get_context } from "./storage_session_get_context.mjs";
import { app_code_milestone_key } from "./app_code_milestone_key.mjs";
export function app_code_milestone_left_is(context) {
  "Whether the last thing this tab picked was a milestone - which is what the review screen and the home list both need to know, because the review a tab once opened is still in storage after it moves on to a milestone.";
  arguments_assert(arguments, 1);
  let key_last = app_shared_screen_tab_key_last();
  let key_left = storage_session_get_context(context, key_last);
  let key = app_code_milestone_key();
  let left = equal(key_left, key);
  return left;
}
