import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_cycle_mono_multiple } from "../../../love/public/src/html_cycle_mono_multiple.mjs";
export function html_div_cycle_mono_multiple(parent, list) {
  let div = html_div(parent2);
  let mapped = html_cycle_mono_multiple(parent, list);
  return mapped;
}
