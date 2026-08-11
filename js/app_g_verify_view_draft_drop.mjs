import { arguments_assert } from "./arguments_assert.mjs";
import { app_g } from "./app_g.mjs";
import { storage_session_set } from "./storage_session_set.mjs";
export function app_g_verify_view_draft_drop(draft_key, base_key) {
  arguments_assert(arguments, 2);
  ("forget the in-progress suggestion for one verse: both the draft text and the lines it was written against, because a draft kept without the lines it answered would be shown beside lines it no longer belongs to.");
  ("dropping is storing null, not removing. the reading side answers null for a word never written and for a word written as null alike, so the two are one thing to every reader - and the store is only ever reached through the repo's own storing function, so the words this app leaves in a browser stay findable by reading the code.");
  storage_session_set(app_g, draft_key, null);
  storage_session_set(app_g, base_key, null);
}
