import { html_placeholder } from "./html_placeholder.mjs";
import { html_input_wide } from "./html_input_wide.mjs";
export function html_input_placeholder_wide(parent, placeholder) {
  let input = html_input_wide(parent);
  html_placeholder(input, placeholder);
  return input;
}
