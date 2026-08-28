import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_scroll_center_target } from "./html_scroll_center_target.mjs";
import { property_get } from "./property_get.mjs";
import { html_scroll_animate } from "./html_scroll_animate.mjs";
export function html_scroll_center_coordinates(
  coordinates,
  tile_component,
  container,
) {
  "Scrolls a box smoothly until one square of the grid inside it is in the middle of the";
  "screen, and reports when it has settled.";
  "Where to stand is worked out somewhere else, because the same sum is wanted by a camera";
  "that changes the size of the squares while it travels and so has to ask it again on";
  "every frame. Here it is asked once, which is right whenever nothing else is moving.";
  let container_e = html_component_element_get(container);
  let target = html_scroll_center_target(
    coordinates,
    tile_component,
    container,
  );
  let left = property_get(target, "left");
  let top = property_get(target, "top");
  let promise = html_scroll_animate(container_e, left, top);
  return promise;
}
