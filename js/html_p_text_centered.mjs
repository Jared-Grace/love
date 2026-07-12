import { html_centered } from "./html_centered.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function html_p_text_centered(p_next, text) {
  let p = html_p_text(p_next, text);
  html_centered(p);
  return p;
}
