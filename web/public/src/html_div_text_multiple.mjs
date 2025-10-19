import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
export function html_div_text_multiple(parent, list) {
  marker("1");
  function lambda2(item) {
    html_p_text(parent, item);
  }
  each(list, lambda2);
}
