import { app_code_lesson_current_number } from "./app_code_lesson_current_number.mjs";
import { app_code_review_due_is } from "./app_code_review_due_is.mjs";
import { app_code_lesson_next_none_is } from "./app_code_lesson_next_none_is.mjs";
import { app_code_quiz_index_reset } from "./app_code_quiz_index_reset.mjs";
import { app_code_after_lesson } from "./app_code_after_lesson.mjs";
import { fn_name } from "./fn_name.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
import { app_shared_button_wide_spaced } from "./app_shared_button_wide_spaced.mjs";
export function app_code_button_skip_lesson(context, parent) {
  "a 'Skip to the next lesson' button that jumps straight to the next lesson the learner has not finished (or the review, at a checkpoint), the same as finishing this lesson - shared by the examples screen and the quiz screen so either offers the escape. Renders nothing (returns null) only where there is nowhere at all to go";
  let number = app_code_lesson_current_number(context);
  let has_review = app_code_review_due_is(number);
  ("whether there is anywhere to go is one question asked in one place, because the end of the last quiz asks it too and the two must not disagree - a dead button beside the note saying the course is done reads as a fault in the app");
  let no_next = app_code_lesson_next_none_is(context);
  if (no_next) {
    return null;
  }
  async function skip() {
    app_code_quiz_index_reset(context);
    await app_code_after_lesson(context);
  }
  ("when this lesson is a checkpoint, ",
    fn_name("app_code_after_lesson"),
    " goes to the REVIEW next, so the button should say review, not lesson");
  let destination = "lesson";
  if (has_review) {
    destination = "review";
  }
  let left = emoji_arrow_right();
  let right = text_combine("Skip to the next ", destination);
  let skip_text = text_combine_middle_space_nb(left, right);
  let skip_button = app_shared_button_wide_spaced(parent, skip_text, skip);
  return skip_button;
}
