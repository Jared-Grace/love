import { html_style_padding } from "./html_style_padding.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_width_full } from "./html_width_full.mjs";
export function html_style_literal_gate_probe(component) {
  "Temporary: a padding set by name, to prove the gate goes red. Deleted immediately after.";
  html_width_full(component);
  html_style_padding(component, "1rem");
}
