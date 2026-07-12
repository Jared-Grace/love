import { html_on_resize } from "./html_on_resize.mjs";
import { html_on_scroll } from "./html_on_scroll.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { text_combine } from "./text_combine.mjs";
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
      top: text_combine(element.scrollTop, "px"),
      left: text_combine(element.scrollLeft, "px"),
      width: text_combine(element.clientWidth, "px"),
      height: text_combine(element.clientHeight, "px"),
    };
    html_style_assign(overlay, s);
  }
  update();
  html_on_scroll(container, update);
  html_on_resize(update);
  return overlay;
}
