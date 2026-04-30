import { html_placeholder } from "../../../love/public/src/html_placeholder.mjs";
import { html_input_wide } from "../../../love/public/src/html_input_wide.mjs";
export function html_input_placeholder_wide(root, placeholder) {
  let input = html_input_wide(root);
  html_placeholder(input, placeholder);
  return input;
}
