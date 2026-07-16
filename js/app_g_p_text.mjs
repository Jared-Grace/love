import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_style_control_font_size } from "./app_shared_style_control_font_size.mjs";
export function app_g_p_text(container, name) {
  arguments_assert(arguments, 2);
  let p = html_p_text(container, name);
  html_style_assign(p, {
    "margin-top": "0.5em",
    "margin-bottom": "0.5em",
    "font-size": app_shared_style_control_font_size(),
  });
  return p;
}
