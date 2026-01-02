import { each } from "../../../love/public/src/each.mjs";
import { html_on } from "../../../love/public/src/html_on.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function html_overlay(container, z_index) {
  let overlay = html_div(container);
  let element = html_component_element_get(container);
  let s = {
    position: "absolute",
    background: "rgba(0,0,0,0.4)",
    padding: "1vw",
    zIndex: z_index,
  };
  html_style_assign(overlay, s);
  function update() {
    let s = {
      top: element.scrollTop + "px",
      left: element.scrollLeft + "px",
      width: element.clientWidth + "px",
      height: element.clientHeight + "px",
    };
    html_style_assign(overlay, s);
  }
  update();
  function lambda2(e) {}
  html_on(container, "scroll", update);
  let es = [, "resize"];
  each(es, lambda2);
  return overlay;
}
