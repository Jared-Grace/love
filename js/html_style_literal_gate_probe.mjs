import { html_style_set } from "./html_style_set.mjs";
export function html_style_literal_gate_probe(component) {
  "Temporary: a padding set by name, to prove the gate goes red. Deleted immediately after.";
  html_style_set(component, "padding", "1rem");
}
