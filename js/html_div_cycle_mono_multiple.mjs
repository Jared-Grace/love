import { list_map } from "./list_map.mjs";
import { html_div_cycle_mono } from "./html_div_cycle_mono.mjs";
export function html_div_cycle_mono_multiple(parent, list) {
  function lambda(parts) {
    let r = html_div_cycle_mono(parent, parts);
    return r;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
