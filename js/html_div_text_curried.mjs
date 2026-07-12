import { html_div_text } from "./html_div_text.mjs";
export function html_div_text_curried(root) {
  let c = function html_div_text_curried_result(text) {
    let div = html_div_text(root, text);
    return div;
  };
  return c;
}
