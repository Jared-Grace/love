import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_questions_max_key } from "./app_code_questions_max_key.mjs";
import { storage_session_get_context } from "./storage_session_get_context.mjs";
import { null_is } from "./null_is.mjs";
import { list_take } from "./list_take.mjs";
export function app_code_review_questions_cap(context, queue) {
  arguments_assert(arguments, 2);
  ("The questions a review or milestone will ask, cut to the most a link asked for in this tab, or all of them when no link did.");
  ("Applied to a resumed queue as well as a fresh one, so a link opened over a checkpoint already begun still finishes after that many.");
  let key = app_code_questions_max_key();
  let max = storage_session_get_context(context, key);
  if (null_is(max)) {
    return queue;
  }
  let taken = list_take(queue, max);
  return taken;
}
