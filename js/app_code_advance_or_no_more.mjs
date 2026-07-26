import { app_code_no_more_lessons } from "./app_code_no_more_lessons.mjs";
export function app_code_advance_or_no_more(parent, has_next, render_advance) {
  "single-sources the rule that a dead Next must never sit beside the end-of-lessons note: when there is a next destination, render the way-forward control via render_advance(parent); otherwise show the shared 'no more lessons' message and NO advance button. Used by both the quiz screen and the review screen so neither can show both at once";
  if (has_next) {
    render_advance(parent);
  } else {
    app_code_no_more_lessons(parent);
  }
}
