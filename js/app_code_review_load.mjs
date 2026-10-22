import { app_code_review_state_key } from "./app_code_review_state_key.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_review_seeds_live } from "./app_code_review_seeds_live.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_code_review_seeds_gather } from "./app_code_review_seeds_gather.mjs";
export function app_code_review_load(context, checkpoint_key, lessons) {
  "$plain checkpoint_key";
  "checkpoint_key is what the checkpoint is filed under - a review's number or a milestone's id - and lessons what a fresh queue is gathered from";
  "resume the persisted seed queue when one is saved for this same checkpoint, otherwise gather a fresh shuffled queue";
  "★ A SAVED QUEUE IS FILTERED BEFORE IT IS RESUMED. A seed can name a lesson this page no longer hands out, and rebuilding one of those throws hard enough to take the whole boot with it - so a queue saved before the run of lessons moved is the one thing on a learner's device that can lock them out of the app for good. What survives the filter is resumed; what does not is gone, and next door says why.";
  "A save that is emptied by the filter is treated as unusable rather than resumed, because an empty queue is how a review says it is finished - resuming one would tell the learner they had completed a review they never took, and take the checkpoint away with it. A save that was already empty is a real finished review, so that one is resumed as it stands.";
  let key = app_code_review_state_key(checkpoint_key);
  let stored = storage_local_get_context(context, key);
  let stored_present = null_not_is(stored);
  if (stored_present) {
    let queue_stored = property_get(stored, "seeds");
    let passed_stored = property_get(stored, "passed");
    let queue_live = app_code_review_seeds_live(queue_stored);
    let live_any = list_empty_not_is(queue_live);
    let finished = list_empty_is(queue_stored);
    let usable = live_any || finished;
    if (usable) {
      let resumed = {
        queue: queue_live,
        passed: passed_stored,
      };
      return resumed;
    }
  }
  let queue = app_code_review_seeds_gather(lessons);
  let passed = 0;
  let fresh = {
    queue,
    passed,
  };
  return fresh;
}
