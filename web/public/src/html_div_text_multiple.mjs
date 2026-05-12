import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function html_div_text_multiple(parent, list) {
  function lambda(item) {
    let div = html_div_text(parent, item);
    return div;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
