import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_div_cycle_mono } from "../../../love/public/src/html_div_cycle_mono.mjs";
export function html_div_cycle_mono_multiple(parent, list) {
  function lambda(parts) {
    let r = html_div_cycle_mono(parent, parts);
    return r;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
