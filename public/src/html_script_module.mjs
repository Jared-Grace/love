import { html_script } from "../../../love/public/src/html_script.mjs";
import { html_attribute_set } from "../../../love/public/src/html_attribute_set.mjs";
export function html_script_module(script_body_text) {
  let component = html_script(script_body_text);
  html_attribute_set(component, "type", "module");
}
