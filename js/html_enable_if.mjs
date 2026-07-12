import { ternary } from "./ternary.mjs";
import { html_disable } from "./html_disable.mjs";
import { html_enable } from "./html_enable.mjs";
export function html_enable_if(component, condition) {
  let fn = null;
  fn = ternary(condition, html_enable, html_disable);
  fn(component);
}
