import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
export function html_div_text_lambda(v) {
  let v2 = function lambda(container) {
    let div = html_div_text(container, v);
    return div;
  };
  return v2;
}
