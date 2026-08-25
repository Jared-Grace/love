import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_home_bar_gear_content } from "./app_code_home_bar_gear_content.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
export function app_code_home_value(root, context) {
  arguments_assert(arguments, 2);
  let g = app_code_home_bar_gear_content(root, context);
  let div = html_div_text_centered(g, "Lessons:");
  let value = app_shared_spaced_gap();
  let r = {
    g,
    div,
    value,
  };
  return r;
}
