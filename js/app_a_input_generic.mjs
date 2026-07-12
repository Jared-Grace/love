import { html_style_assign } from "./html_style_assign.mjs";
import { html_width_full } from "./html_width_full.mjs";
import { app_a_control_style } from "./app_a_control_style.mjs";
import { html_focus } from "./html_focus.mjs";
export function app_a_input_generic(fn, body) {
  let input = fn(body);
  html_focus(input);
  app_a_control_style(input);
  html_width_full(input);
  html_style_assign(input, {
    "border-width": "1px",
    "border-color": "gray",
  });
  return input;
}
