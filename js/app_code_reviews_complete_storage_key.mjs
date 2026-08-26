import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function app_code_reviews_complete_storage_key() {
  "The word the reviews a learner has finished are filed under on their own device.";
  "Kept apart from the record of finished lessons rather than folded into it, because that record is keyed by the id of a lesson and a review is named by a number. Folded in, a review would have to borrow some spelling no lesson happens to use, and nothing anywhere would go on checking that no lesson had taken it.";
  "Frozen, like every word this repo writes into somebody else's browser. Retyping it would not move anybody's finished reviews - it would leave them filed under the old word, unreachable, and the learner would open the list to find work they had done reading as work they had not.";
  arguments_assert(arguments, 0);
  let key = text_frozen("reviews_complete");
  return key;
}
