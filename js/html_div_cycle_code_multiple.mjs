import { list_map } from "./list_map.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function html_div_cycle_code_multiple(parent, list_parts) {
  function lambda(parts) {
    let r = html_div_cycle_code(parent, parts);
    return r;
  }
  let mapped = list_map(list_parts, lambda);
  return mapped;
}
