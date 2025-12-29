import { html_element } from "../../../love/public/src/html_element.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function html_element_parse(html_outer) {
  marker("1");
  const tpl = document.createElement("template");
  let component = html_element(parent, tag_name);
  tpl.innerHTML = html_outer.trim();
  const importMapScript = tpl.content.firstElementChild;
  document.head.appendChild(importMapScript);
}
