import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function html_element_parse(html_outer) {
  marker("1");
  let component = html_element(parent, "template");
  html_text_set(component, html_outer);
  const importMapScript = tpl.content.firstElementChild;
  document.head.appendChild(importMapScript);
}
