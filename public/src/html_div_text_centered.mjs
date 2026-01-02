import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
export function html_div_text_centered(root, text) {
  let div = html_div_text(root, text);
  html_centered(div);
}
