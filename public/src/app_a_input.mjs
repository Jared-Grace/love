import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { app_a_control_style } from "../../../love/public/src/app_a_control_style.mjs";
import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { html_input } from "../../../love/public/src/html_input.mjs";
export function app_a_input(body) {
  let input = html_input(body);
  html_focus(input);
  app_a_control_style(input);
  html_width_full(input);
  html_style_assign(input, {
    "border-width": "1px",
    "border-color": "gray",
  });
  return input;
}
