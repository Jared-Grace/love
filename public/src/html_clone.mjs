import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_clone(c) {
  let element = html_component_element_get(c);
  cloned=element.cloneNode(true);
  let c = html_component_wrap(cloned);$r,c
}
