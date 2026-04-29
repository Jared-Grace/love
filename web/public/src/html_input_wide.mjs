import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { html_input } from "../../../love/public/src/html_input.mjs";
export function html_input_wide(root) {
  let component = html_input(root);
  html_width_full(component);
}
