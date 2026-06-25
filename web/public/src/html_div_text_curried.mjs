import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
export function html_div_text_curried(root) {
  let c = function html_div_text_curried_result(text) {
    return html_div_text(root, text);
  };
  return c;
}
