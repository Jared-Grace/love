import { html_attribute_set } from "../../../love/public/src/html_attribute_set.mjs";
import { html_input } from "../../../love/public/src/html_input.mjs";
export function html_input_type(div, input_type) {
  let input = html_input(div);
  html_attribute_set(input, "type", input_type);
  return input;
}
