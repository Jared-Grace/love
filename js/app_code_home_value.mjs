import { html_shown_when_under_bar } from "./html_shown_when_under_bar.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_home_bar_content } from "./app_code_home_bar_content.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lessons_any_complete } from "./app_code_lessons_any_complete.mjs";
import { not } from "./not.mjs";
import { app_code_home_start_button } from "./app_code_home_start_button.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
export function app_code_home_value(root, context) {
  arguments_assert(arguments, 2);
  let frame = app_code_home_bar_content(root, context);
  let bar = property_get(frame, "bar");
  let g = property_get(frame, "content");
  let started = app_code_lessons_any_complete(context);
  if (not(started)) {
    let big = app_code_home_start_button(g, context);
    let next = property_get(frame, "next");
    html_shown_when_under_bar(next, big, bar);
  }
  let div = html_div_text_centered(g, "Lessons:");
  let value = app_shared_spaced_gap();
  let r = {
    bar,
    g,
    div,
    value,
  };
  return r;
}
