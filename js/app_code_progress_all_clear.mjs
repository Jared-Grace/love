import { app_code_progress_storage_key } from "./app_code_progress_storage_key.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_remove_context } from "./storage_local_remove_context.mjs";
export function app_code_progress_all_clear(context) {
  "Takes the whole record of what this learner has answered off their own disk, so the lesson list reads as it did the day they opened it. For somebody starting again, and for somebody who marked everything finished and did not mean to.";
  "It removes the record rather than writing an empty one over it, because a learner who has never answered anything and a learner who has just cleared everything should be indistinguishable - anything else is a difference that could only ever be a bug waiting to be found.";
  arguments_assert(arguments, 1);
  let key = app_code_progress_storage_key();
  storage_local_remove_context(context, key);
}
