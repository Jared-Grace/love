import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_wide_next } from "./app_shared_button_wide_next.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function app_code_lesson_quiz_render_next(next_parent, on_next) {
  arguments_assert(arguments, 2);
  ("the Next button with the standard top gap; shown only while there is still somewhere to go");
  let next_button = app_shared_button_wide_next(next_parent, on_next);
  let value = app_shared_spaced_gap();
  html_style_margin_top(next_button, value);
}
