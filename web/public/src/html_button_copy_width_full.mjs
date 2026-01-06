import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { html_button_copy } from "../../../love/public/src/html_button_copy.mjs";
export function html_button_copy_width_full(div_verse, copy) {
  let c = html_button_copy(div_verse, copy);
  html_width_full(c);
}
