import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_style_control_font_size } from "./app_shared_style_control_font_size.mjs";
export function app_g_p_text(container, name) {
  arguments_assert(arguments, 2);
  let p = html_p_text(container, name);
  let margin_y = app_shared_spaced_small_gap();
  html_style_assign(p, {
    "margin-top": margin_y,
    "margin-bottom": margin_y,
    "font-size": app_shared_style_control_font_size(),
  });
  return p;
}
