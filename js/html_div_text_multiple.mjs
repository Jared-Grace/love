import { html_div_text_curried } from "./html_div_text_curried.mjs";
import { list_map } from "./list_map.mjs";
export function html_div_text_multiple(parent, list) {
  let lambda = html_div_text_curried(parent);
  let mapped = list_map(list, lambda);
  return mapped;
}
