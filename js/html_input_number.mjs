import { html_input_type } from "./html_input_type.mjs";
import { html_input } from "./html_input.mjs";
export function html_input_number(overlay) {
  let input = html_input(overlay);
  html_input_type(input, "number");
  return input;
}
