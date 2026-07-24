import { app_code_lesson_current_number } from "./app_code_lesson_current_number.mjs";
import { app_code_review_scope } from "./app_code_review_scope.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_lesson_current_last_is } from "./app_code_lesson_current_last_is.mjs";
import { not } from "./not.mjs";
import { app_code_quiz_index_reset } from "./app_code_quiz_index_reset.mjs";
import { app_code_after_lesson } from "./app_code_after_lesson.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
export function app_code_button_skip_lesson(context, parent) {
  "a 'Skip to the next lesson' button that jumps straight to the next lesson (or the review, at a checkpoint), the same as finishing this lesson - shared by the examples screen and the quiz screen so either offers the escape. Renders nothing (returns null) on the last lesson with no review, since there is nowhere to skip to";
  let number = app_code_lesson_current_number(context);
  let scope = app_code_review_scope(number);
  let has_review = null_not_is(scope);
  let last = app_code_lesson_current_last_is(context);
  let no_next = last && not(has_review);
  if (no_next) {
    return null;
  }
  async function skip() {
    app_code_quiz_index_reset(context);
    await app_code_after_lesson(context);
  }
  "when this lesson is a checkpoint, app_code_after_lesson goes to the REVIEW next, so the button should say review, not lesson";
  let destination = "lesson";
  if (has_review) {
    destination = "review";
  }
  let skip_text = text_combine_middle_space_nb(
    emoji_arrow_right(),
    text_combine("Skip to the next ", destination),
  );
  let skip_button = app_shared_button_wide(parent, skip_text, skip);
  html_style_margin_top(skip_button, app_shared_spaced_gap());
  return skip_button;
}
