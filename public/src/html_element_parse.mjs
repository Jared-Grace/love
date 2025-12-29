import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function html_element_parse(parent, html_outer) {
  marker("1");
  let component = html_element(parent, "template");
  html_text_set(component, html_outer);
  let element = html_component_element_get(component);
  const s = element.content.firstElementChild;
  parent.appendChild(s);
}
