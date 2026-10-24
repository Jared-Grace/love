import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_progress_storage_key } from "./app_code_progress_storage_key.mjs";
import { storage_local_remove_context } from "./storage_local_remove_context.mjs";
import { app_code_reviews_complete_storage_key } from "./app_code_reviews_complete_storage_key.mjs";
import { app_code_checkpoints } from "./app_code_checkpoints.mjs";
import { app_code_review_state_key } from "./app_code_review_state_key.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function app_code_progress_all_clear(context) {
  "Takes the whole record of what this learner has answered off their own disk, so the lesson list reads as it did the day they opened it. For somebody starting again, and for somebody who marked everything finished and did not mean to.";
  "It removes the record rather than writing an empty one over it, because a learner who has never answered anything and a learner who has just cleared everything should be indistinguishable - anything else is a difference that could only ever be a bug waiting to be found.";
  arguments_assert(arguments, 1);
  let key = app_code_progress_storage_key();
  storage_local_remove_context(context, key);
  ("the reviews are filed apart from the lessons and have to be forgotten by name here. A clearing that took only the lessons would leave every review still green under a list of lessons that had gone back to the start, which reads as the clearing having half worked.");
  let key_reviews = app_code_reviews_complete_storage_key();
  storage_local_remove_context(context, key_reviews);
  ("a checkpoint left half answered is thrown away too, and each of those is filed under its own key rather than together, so every checkpoint is asked for and each one taken. Left behind, a review or a milestone would open again in the middle of a run of questions belonging to a learner who had just asked to start over.");
  let checkpoints = app_code_checkpoints();
  function each_checkpoint(checkpoint) {
    let number = property_get(checkpoint, "key");
    let key_state = app_code_review_state_key(number);
    storage_local_remove_context(context, key_state);
  }
  each(checkpoints, each_checkpoint);
}
