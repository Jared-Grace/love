export function app_code_home_review_row(g, context, lesson_number, scope) {
  "$plain lesson_number";
  "$plain scope";
  "The button under one lesson on the home screen that opens the review covering that lesson and the ones before it, drawn with the same gap above it that every lesson button has.";
  "It is drawn only where a lesson has a review to open, so the caller asks for the range first and draws nothing where there is none - a review button that led nowhere would read as a lesson the learner had missed.";
  arguments_assert(arguments, 4);
  let label = app_code_review_range_label(lesson_number, scope);
  async function on_click() {
    await app_shared_screen_go_tab(
      context,
      "review_number",
      lesson_number,
      app_code_review,
    );
  }
  let review = app_code_review_button(g, label, on_click);
  let gap = app_shared_spaced_gap();
  html_style_margin_top(review, gap);
}
