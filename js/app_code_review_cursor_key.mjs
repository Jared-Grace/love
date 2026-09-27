import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_review_cursor_key(key) {
  arguments_assert(arguments, 1);
  ("the local-storage key holding where in a review's queue the learner is working, beside the key holding the queue itself. Kept apart from it on purpose: the queue's slot is written whole from more than one place, and each of those would otherwise have to carry the place along or wipe it");
  let cursor_key = text_combine(key, "_cursor");
  return cursor_key;
}
