import { html_request_animation_frame } from "../../../love/public/src/html_request_animation_frame.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
import { html_scroll_generic_wait } from "../../../love/public/src/html_scroll_generic_wait.mjs";
export async function html_scroll_center_container_generic(
  component,
  behavior,
  container,
) {
  let e = await html_scroll_generic_wait(component);
  let container_e = html_component_element_get(container);
  await html_request_animation_frame();
  const containerRect = container_e.getBoundingClientRect();
  const tileRect = e.getBoundingClientRect();
  const scrollLeft =
    container_e.scrollLeft +
    (tileRect.left - containerRect.left) -
    container_e.clientWidth / 2 +
    tileRect.width / 2;
  const scrollTop =
    container_e.scrollTop +
    (tileRect.top - containerRect.top) -
    container_e.clientHeight / 2 +
    tileRect.height / 2;
  const s = {
    left: scrollLeft,
    top: scrollTop,
    behavior,
  };
  container_e.scrollTo(s);
}
