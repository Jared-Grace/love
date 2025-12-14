import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_select(input) {
  html_focus(input);
  let element = html_component_element_get(input);
  element.select();
  log({
    m: "m",
  });
}
