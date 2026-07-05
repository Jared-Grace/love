import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
export function html_div_cycle_code_multiple(parent, list_parts) {
  function lambda(item) {}
  let mapped = list_map(list, lambda);
  let r = html_div_cycle_code(parent, list_parts);
  return r;
}
