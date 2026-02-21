import { each } from "../../../love/public/src/each.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
export function html_p_text_multiple(parent, list) {
  function lambda2(item) {
    html_p_text(parent, item);
  }
  each(list, lambda2);
}
