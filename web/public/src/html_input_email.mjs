import { html_attribute_set } from "../../../love/public/src/html_attribute_set.mjs";
import { html_input_type } from "../../../love/public/src/html_input_type.mjs";
export function html_input_email(div) {
  const input_type = "email";
  let input = html_input_type(div, input_type);
  html_attribute_set(input, "autocomplete", "email");
  html_attribute_set(input, "placeholder", "you@example.com");
  return input;
}
