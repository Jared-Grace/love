import { html_attribute_set } from "../../../love/public/src/html_attribute_set.mjs";
import { html_input_number } from "../../../love/public/src/html_input_number.mjs";
export function html_input_integer(overlay) {
  let input = html_input_number(overlay);
  html_attribute_set(input, "step", "1");
}
