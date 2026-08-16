import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_verify_storage_app } from "./app_g_verify_storage_app.mjs";
import { storage_session_get } from "./storage_session_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { app_g_verify_view_draft_drop } from "./app_g_verify_view_draft_drop.mjs";
export function app_g_verify_view_draft_restore(
  chapter_code,
  verse,
  value,
  suggest_area,
) {
  arguments_assert(arguments, 4);
  let draft_key = "g_verify_draft_" + chapter_code + "_" + verse;
  let base_key = "g_verify_draft_base_" + chapter_code + "_" + verse;
  ("the store is reached through the repo's own storing functions rather than spoken to directly, so every word this app leaves in a reader's browser is visible to a reading of the code. dropping a draft is storing null under it - the getter answers null for a word that was never written and for one written as null alike, so the two are the same thing to every reader here.");
  let app_fn = app_g_verify_storage_app();
  let saved_draft = storage_session_get(app_fn, draft_key);
  let app_fn2 = app_g_verify_storage_app();
  let saved_base = storage_session_get(app_fn2, base_key);
  let draft_fresh = not_equal(saved_draft, null) && equal(saved_base, value);
  if (draft_fresh) {
    html_value_set(suggest_area, saved_draft);
  } else {
    app_g_verify_view_draft_drop(draft_key, base_key);
  }
  ("grow and shrink the textarea to fit its content, so a long suggestion is fully visible without inner scrolling");
  let r = {
    draft_key,
    base_key,
  };
  return r;
}
