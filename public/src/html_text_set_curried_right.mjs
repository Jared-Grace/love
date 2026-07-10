import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
export function html_text_set_curried_right(text) {
  let c = function html_text_set_curried_right_result(component) {
    return html_text_set(component, text);
  };
  return c;
}
