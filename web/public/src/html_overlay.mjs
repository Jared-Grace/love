import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function html_overlay(container, z_index) {
  let overlay = html_div(container);
  let element = html_component_element_get(component);
  let s = {
    position: "absolute",
    top: 0,
    left: 0,
    width: container.clientWidth,
    height: container.clientHeight,
    background: "rgba(0,0,0,0.4)",
    padding: "1vw",
    "z-index": z_index,
  };
  html_style_assign(overlay, s);
  return overlay;
}
