import { app_code_lessons_any_complete } from "./app_code_lessons_any_complete.mjs";
import { app_code_home_start_button } from "./app_code_home_start_button.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_home_bar_content } from "./app_code_home_bar_content.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
export function app_code_home_value(root, context) {
  arguments_assert(arguments, 2);
  let g = app_code_home_bar_content(root, context);
  let started = app_code_lessons_any_complete(context);
  if (not(started)) {
    app_code_home_start_button(g, context);
  }
  let div = html_div_text_centered(g, "Lessons:");
  let value = app_shared_spaced_gap();
  let r = {
    g,
    div,
    value,
  };
  return r;
}
