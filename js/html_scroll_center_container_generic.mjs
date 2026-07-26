import { html_request_animation_frame } from "./html_request_animation_frame.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_scroll_generic_wait } from "./html_scroll_generic_wait.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { add } from "./add.mjs";
export async function html_scroll_center_container_generic(
  component,
  behavior,
  container,
) {
  let e = await html_scroll_generic_wait(component);
  let container_e = html_component_element_get(container);
  await html_request_animation_frame();
  let containerRect = container_e.getBoundingClientRect();
  let tileRect = e.getBoundingClientRect();
  let right = subtract(tileRect.left, containerRect.left);
  let left2 = add(container_e.scrollLeft, right);
  let right2 = divide(container_e.clientWidth, 2);
  let left3 = subtract(left2, right2);
  let right3 = divide(tileRect.width, 2);
  let scrollLeft = add(left3, right3);
  let right4 = subtract(tileRect.top, containerRect.top);
  let left4 = add(container_e.scrollTop, right4);
  let right5 = divide(container_e.clientHeight, 2);
  let left5 = subtract(left4, right5);
  let right6 = divide(tileRect.height, 2);
  let scrollTop = add(left5, right6);
  let s = {
    left: scrollLeft,
    top: scrollTop,
    behavior,
  };
  container_e.scrollTo(s);
}
