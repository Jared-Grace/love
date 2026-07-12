import { html_cycle_mono } from "./html_cycle_mono.mjs";
import { list_map } from "./list_map.mjs";
export function html_cycle_mono_multiple(parent, list) {
  function lambda(parts) {
    let r = html_cycle_mono(parent, parts);
    return r;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
