import { html_placeholder } from "./html_placeholder.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_input_type } from "./html_input_type.mjs";
export function html_input_email(parent) {
  let input_type = "email";
  let input = html_input_type(parent, input_type);
  html_attribute_set(input, "autocomplete", "email");
  let placeholder = "you@example.com";
  html_placeholder(input, placeholder);
  return input;
}
