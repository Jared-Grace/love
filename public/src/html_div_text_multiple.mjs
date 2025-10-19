import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function html_div_text_multiple(parent, list) {
  marker("1");
  function lambda2(item) {
    html_div_text(parent, item);
  }
  each(list, lambda2);
}
