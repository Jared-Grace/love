import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_progress_read } from "./app_code_progress_read.mjs";
import { app_shared_screen_tab_key_last } from "./app_shared_screen_tab_key_last.mjs";
import { storage_session_get_context } from "./storage_session_get_context.mjs";
import { app_code_review_number_key } from "./app_code_review_number_key.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function app_code_home_rows_start(context) {
  arguments_assert(arguments, 1);
  let just_left = null;
  ("each row says whether that lesson is finished - every quiz in it answered right at least once - so a learner coming back can see where they got to instead of remembering it. The same row is what the replace app's list is made of, so the check, the pointing hand and the colours mean one thing across the apps");
  let progress = app_code_progress_read(context);
  ("what is carried down the list is whether EVERY lesson so far is finished, not merely the one immediately above. A learner who marked a later lesson finished by hand while an earlier one is still open would otherwise start a second run of reached rows further down, and the list would then wear two pointing hands - each of them claiming to be the one lesson to go to next");
  let complete_all_previous = true;
  ("the list marks ONE of its rows as the way on for a walk of the whole course: the first lesson that is open and not yet finished. That is the row a learner arriving at this list presses, and it is the only row that moves the course along - a finished one goes back over what is done, and a locked one does nothing at all.");
  let way_marked = false;
  ("which KIND of row the learner just came back from cannot be read off the values: the lesson they last opened and the review they last opened are both still in storage. The name of the key written last is the one thing that tells them apart");
  let key_last = app_shared_screen_tab_key_last();
  let key_left = storage_session_get_context(context, key_last);
  let review_key = app_code_review_number_key();
  let review_left = equal(key_left, review_key);
  ("a tab that has picked nothing at all reads as having left a LESSON - a shared link seeds the lesson straight into storage without a pick, and a lesson is what this list scrolled back to before a review could be come back from at all");
  let lesson_left = not(review_left);
  let review_number = storage_session_get_context(context, review_key);
  let r = {
    just_left,
    progress,
    complete_all_previous,
    way_marked,
    lesson_left,
    review_left,
    review_number,
  };
  return r;
}
