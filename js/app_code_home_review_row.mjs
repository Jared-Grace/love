import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_range_label } from "./app_code_review_range_label.mjs";
import { app_code_review_number_key } from "./app_code_review_number_key.mjs";
import { app_shared_screen_go_tab } from "./app_shared_screen_go_tab.mjs";
import { app_code_review } from "./app_code_review.mjs";
import { app_code_review_button } from "./app_code_review_button.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function app_code_home_review_row(
  g,
  context,
  lesson_number,
  scope,
  complete,
) {
  "$plain lesson_number";
  "$plain scope";
  "$plain complete";
  "The button under one lesson on the home screen that opens the review covering that lesson and the ones before it, drawn with the same gap above it that every lesson button has.";
  "It is drawn only where a lesson has a review to open, so the caller asks for the range first and draws nothing where there is none - a review button that led nowhere would read as a lesson the learner had missed.";
  "It hands back the button rather than nothing, for the reason a lesson row does: the caller scrolls back to the row the learner just left, and a review is one of the rows they can have left.";
  arguments_assert(arguments, 5);
  let label = app_code_review_range_label(lesson_number, scope);
  async function on_click() {
    let key = app_code_review_number_key();
    await app_shared_screen_go_tab(
      context,
      key,
      lesson_number,
      app_code_review,
    );
  }
  let review = app_code_review_button(g, label, on_click, complete);
  let gap = app_shared_spaced_gap();
  html_style_margin_top(review, gap);
  return review;
}
