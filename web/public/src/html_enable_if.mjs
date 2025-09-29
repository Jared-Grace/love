import { html_disable } from "../../../love/public/src/html_disable.mjs";
import { html_enable } from "../../../love/public/src/html_enable.mjs";
export function html_enable_if(component, condition) {
  let fn = null;
  if (condition) {
    fn = html_enable;
  } else {
    fn = html_disable;
  }
  fn(component);
}
