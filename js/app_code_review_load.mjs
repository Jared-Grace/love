import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { app_code_review_state_key } from "./app_code_review_state_key.mjs";
import { app_code_review_scope } from "./app_code_review_scope.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_slice } from "./list_slice.mjs";
import { subtract } from "./subtract.mjs";
import { app_code_review_seeds_gather } from "./app_code_review_seeds_gather.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_load(context, number) {
  "resume the persisted seed queue when one is saved for this same checkpoint, otherwise gather a fresh shuffled queue";
  let key = app_code_review_state_key(number);
  let stored = storage_local_get_context(context, key);
  let stored_present = null_not_is(stored);
  if (stored_present) {
    let queue = property_get(stored, "seeds");
    let passed = property_get(stored, "passed");
    let resumed = {
      queue,
      passed,
    };
    return resumed;
  }
  let scope = app_code_review_scope(number);
  let start = subtract(number, scope);
  let lessons = app_code_lessons();
  let covered = list_slice(lessons, start, number);
  let queue = app_code_review_seeds_gather(covered);
  let passed = 0;
  let fresh = {
    queue,
    passed,
  };
  return fresh;
}
