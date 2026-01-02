import { html_on_resize } from "../../../love/public/src/html_on_resize.mjs";
import { html_on_scroll } from "../../../love/public/src/html_on_scroll.mjs";
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
    transition: "opacity 0.2s",
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
  html_on_scroll(container, update);
  html_on_resize(update);
  return overlay;
}
