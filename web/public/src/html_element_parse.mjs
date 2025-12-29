import { marker } from "../../../love/public/src/marker.mjs";
export function html_element_parse() {
  marker("1");
  const tpl = document.createElement("template");
  tpl.innerHTML = importMapString.trim();
  const importMapScript = tpl.content.firstElementChild;
  document.head.appendChild(importMapScript);
}
