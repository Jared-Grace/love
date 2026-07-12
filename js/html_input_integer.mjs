import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_input_number } from "./html_input_number.mjs";
export function html_input_integer(overlay) {
  let input = html_input_number(overlay);
  html_attribute_set(input, "step", "1");
  return input;
}
