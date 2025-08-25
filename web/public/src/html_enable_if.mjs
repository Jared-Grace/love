import { html_disable } from "./html_disable.mjs";
import { html_enable } from "./html_enable.mjs";
export function html_enable_if(component) {
  let fn = null;
  if (nn) {
    fn = html_enable;
  } else {
    fn = html_disable;
  }
  fn(component);
}
