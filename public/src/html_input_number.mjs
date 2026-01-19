import { html_input_type } from "../../../love/public/src/html_input_type.mjs";
import { html_input } from "../../../love/public/src/html_input.mjs";
export function html_input_number(overlay) {
  let input = html_input(overlay);
  html_input_type(input, "number");
  return input;
}
