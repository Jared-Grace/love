import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_passage_kept_key } from "./app_shared_bible_passage_kept_key.mjs";
import { storage_session_get_context } from "./storage_session_get_context.mjs";
export function app_shared_bible_passage_kept_get(context) {
  "The passage this tab was reading before somebody went off to choose another one, or nothing when this tab has not read one yet.";
  "Nothing is an ordinary answer rather than a fault: a tab opened straight onto a picker has been nowhere to come back to, and the way out is simply not offered.";
  arguments_assert(arguments, 1);
  let key = app_shared_bible_passage_kept_key();
  let kept = storage_session_get_context(context, key);
  return kept;
}
