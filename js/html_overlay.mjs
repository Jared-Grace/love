import { html_on_resize } from "./html_on_resize.mjs";
import { html_on_scroll } from "./html_on_scroll.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_overlay(container, z_index) {
  "a dimmed panel pinned over a scrollable container (the game map), holding a menu or conversation. `touch-action: none` stops the map from PANNING under it: the overlay covers the whole map, so without this a touch-drag on the overlay reaches the scrollable parent and slides the world behind the conversation — the player drags the map instead of reading. taps (button clicks) still work; only the pan/zoom gesture is blocked.";
  let overlay = html_div(container);
  let element = html_component_element_get(container);
  let s = {
    position: "absolute",
    background: "rgba(0,0,0,0.4)",
    padding: "1vw",
    "touch-action": "none",
    "z-index": z_index,
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
  let remove_scroll = html_on_scroll(container, update);
  let remove_resize = html_on_resize(update);
  let overlay_element = html_component_element_get(overlay);
  overlay_element.remove_listeners = function remove_listeners() {
    remove_scroll();
    remove_resize();
  };
  return overlay;
}
