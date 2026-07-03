import { each } from "../../../love/public/src/each.mjs";
import { html_cycle_mono } from "../../../love/public/src/html_cycle_mono.mjs";
export function html_cycle_mono_multiple(parent, list) {
  function lambda(parts) {
    let r = html_cycle_mono(parent, parts);
  }
  each(list, lambda);
  return r;
}
