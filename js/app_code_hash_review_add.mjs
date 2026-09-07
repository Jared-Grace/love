import { app_code_review_number_key } from "./app_code_review_number_key.mjs";
import { storage_session_get_context } from "./storage_session_get_context.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_shared_screen_stored_get } from "./app_shared_screen_stored_get.mjs";
import { equal } from "./equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_review_hash_key } from "./app_code_review_hash_key.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_hash_review_add(context, hash) {
  "Put the review this tab is on into the address the code app is about to show, so a refresh and a pasted link both come back to the same checkpoint.";
  "Nothing is written while no review has been chosen, the same way an unstarted quiz leaves its word off - a link naming a review nobody opened would send the reader to one they had not asked for.";
  "AND NOTHING IS WRITTEN ONCE THE READER HAS LEFT THE REVIEW, because the number is only ever read by the review screen. A review is drawn and redrawn inside that one screen from first exercise to last, so on any other screen the number says nothing about what is on the page.";
  "Left in, it is not merely noise. The address is read back on the way in, so a link copied from a lesson would quietly point whoever opened it at the copier's review rather than the one their own progress stands at - a wrong answer given silently, to somebody who never mentioned a review.";
  "Leaving the review does not forget which one it was: the number stays in this tab, and the review's own half-finished queue is kept on the device under that number. So the word comes back into the address the moment the review is opened again, and a refresh in this same tab never needed it at all.";
  let key = app_code_review_number_key();
  let number = storage_session_get_context(context, key);
  let present = null_not_is(number);
  let screen = app_shared_screen_stored_get(context);
  let right = fn_name("app_code_review");
  let on_review = equal(screen, right);
  if (present && on_review) {
    let word = app_code_review_hash_key();
    property_set(hash, word, number);
  }
}
