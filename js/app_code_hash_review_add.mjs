import { app_code_review_number_key } from "./app_code_review_number_key.mjs";
import { storage_session_get_context } from "./storage_session_get_context.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_review_hash_key } from "./app_code_review_hash_key.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_hash_review_add(context, hash) {
  "Put the review this tab is on into the address the code app is about to show, so a refresh and a pasted link both come back to the same checkpoint.";
  "Nothing is written while no review has been chosen, the same way an unstarted quiz leaves its word off - a link naming a review nobody opened would send the reader to one they had not asked for.";
  let key = app_code_review_number_key();
  let number = storage_session_get_context(context, key);
  let present = null_not_is(number);
  if (present) {
    let word = app_code_review_hash_key();
    property_set(hash, word, number);
  }
}
