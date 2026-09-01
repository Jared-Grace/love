import { html_scroll_generic_wait } from "./html_scroll_generic_wait.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_request_animation_frame } from "./html_request_animation_frame.mjs";
import { html_scroll_center_offset } from "./html_scroll_center_offset.mjs";
export async function html_scroll_center_container_generic(
  component,
  behavior,
  container,
) {
  "Scrolls a box until one thing drawn inside it sits in the middle of what can be seen, in both directions at once, gliding or arriving at once as the caller asks.";
  "THE SUM IS ASKED FOR TWICE AND IS WRITTEN OUT NEITHER TIME. Across and down are the same arithmetic over a different five numbers, and it had been spelled out both ways here - so a change to the middle of a box was two edits, and getting one of them meant a box centred sideways by one rule and downwards by another.";
  let e = await html_scroll_generic_wait(component);
  let container_e = html_component_element_get(container);
  await html_request_animation_frame();
  let containerRect = container_e.getBoundingClientRect();
  let tileRect = e.getBoundingClientRect();
  let scrollLeft = html_scroll_center_offset(
    container_e.scrollLeft,
    tileRect.left,
    containerRect.left,
    container_e.clientWidth,
    tileRect.width,
  );
  let scrollTop = html_scroll_center_offset(
    container_e.scrollTop,
    tileRect.top,
    containerRect.top,
    container_e.clientHeight,
    tileRect.height,
  );
  let s = {
    left: scrollLeft,
    top: scrollTop,
    behavior,
  };
  container_e.scrollTo(s);
}
