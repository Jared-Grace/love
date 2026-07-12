import { html_width_full } from "./html_width_full.mjs";
import { html_input } from "./html_input.mjs";
export function html_input_wide(root) {
  let component = html_input(root);
  html_width_full(component);
  return component;
}
