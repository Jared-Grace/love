import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_input_type } from "./html_input_type.mjs";
export function html_input_text(parent, placeholder) {
  let input_type = "text";
  let input = html_input_type(parent, input_type);
  html_attribute_set(input, "placeholder", placeholder);
  return input;
}
