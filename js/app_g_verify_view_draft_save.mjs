import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_storage_app } from "./app_g_storage_app.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { storage_session_set } from "./storage_session_set.mjs";
export function app_g_verify_view_draft_save(
  suggest_area,
  draft_key,
  base_key,
  value,
) {
  arguments_assert(arguments, 4);
  ("keep the in-progress suggestion for one verse, together with the lines it was written against, so coming back to the verse restores the draft only while those lines are still the ones on the page.");
  ("the store is reached through the repo's own storing function rather than spoken to directly, so a word this app leaves in a reader's browser can be found by reading the code.");
  let current = html_value_get(suggest_area);
  let app_fn = app_g_verify_storage_app();
  storage_session_set(app_fn, draft_key, current);
  let app_fn2 = app_g_verify_storage_app();
  storage_session_set(app_fn2, base_key, value);
}
