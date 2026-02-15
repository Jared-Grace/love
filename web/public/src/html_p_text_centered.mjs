import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
export function html_p_text_centered(p_next, text) {
  let p = html_p_text(p_next, text);
  html_centered(p);
}
