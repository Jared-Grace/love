import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_current_number } from "./app_code_lesson_current_number.mjs";
import { app_code_review_due_is } from "./app_code_review_due_is.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_current_last_is } from "./app_code_lesson_current_last_is.mjs";
import { app_code_quiz_index_reset } from "./app_code_quiz_index_reset.mjs";
import { app_code_lesson_next } from "./app_code_lesson_next.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
import { app_shared_button_wide_spaced } from "./app_shared_button_wide_spaced.mjs";
export function app_code_button_skip_lesson_past_review(context, parent) {
  "a 'Skip to the next lesson' button for a lesson a review comes after: it goes to the lesson straight after this one, leaving the review behind.";
  "At a checkpoint the ordinary way on is the review, so the skip button beside it says review. A learner who wanted neither this lesson nor the review then had nowhere to press - the only door out of the lesson led into the review, and the only way to the lesson after it was to sit the review first. The lesson is now offered on a button of its own beside that one: two buttons saying two things, the same shape the unfinished-work button already takes rather than one button quietly choosing.";
  "Drawn only where a review is actually due and a lesson actually follows this one in the course, so it never stands beside the review button on the last lesson - there it would lead back to the very screen it was pressed on, because going on from the last lesson has nowhere in order to go.";
  arguments_assert(arguments, 2);
  let number = app_code_lesson_current_number(context);
  let has_review = app_code_review_due_is(number);
  if (not(has_review)) {
    return null;
  }
  let last = app_code_lesson_current_last_is(context);
  if (last) {
    return null;
  }
  async function skip() {
    app_code_quiz_index_reset(context);
    await app_code_lesson_next(context);
  }
  let left = emoji_arrow_right();
  let right = "Skip to the next lesson";
  let skip_text = text_combine_middle_space_nb(left, right);
  let skip_button = app_shared_button_wide_spaced(parent, skip_text, skip);
  return skip_button;
}
