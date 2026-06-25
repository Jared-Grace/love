import { html_div_text_curried } from "../../../love/public/src/html_div_text_curried.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function html_div_text_multiple(parent, list) {
  let lambda = html_div_text_curried(parent);
  let mapped = list_map(list, lambda);
  return mapped;
}
