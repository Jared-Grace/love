import { each } from "../../../love/public/src/each.mjs";
import { html_on } from "../../../love/public/src/html_on.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function html_overlay(container, z_index) {
  let overlay = html_div(container);
  let element = html_component_element_get(container);
  log({
    element,
  });
  let s = {
    position: "absolute",
    top: element.scrollTop + "px",
    left: element.scrollLeft + "px",
    width: element.clientWidth + "px",
    height: element.clientHeight + "px",
    background: "rgba(0,0,0,0.4)",
    padding: "1vw",
    zIndex: z_index,
  };
  let es = ["scroll", "resize"];
  function lambda2(item) {}
  each(list, lambda2);
  html_on(component, name_event, lambda);
  container.addEventListener("scroll", updateOverlay);
  log({
    s,
  });
  html_style_assign(overlay, s);
  return overlay;
}
