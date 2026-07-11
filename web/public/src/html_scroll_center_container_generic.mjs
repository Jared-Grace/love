import { log } from "../../../love/public/src/log.mjs";
import { html_request_animation_frame } from "../../../love/public/src/html_request_animation_frame.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
import { html_scroll_generic_wait } from "../../../love/public/src/html_scroll_generic_wait.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
import { divide } from "../../../love/public/src/divide.mjs";
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
  let scrollLeft = add(
    subtract(
      add(container_e.scrollLeft, subtract(tileRect.left, containerRect.left)),
      divide(container_e.clientWidth, 2),
    ),
    divide(tileRect.width, 2),
  );
  let scrollTop = add(
    subtract(
      add(container_e.scrollTop, subtract(tileRect.top, containerRect.top)),
      divide(container_e.clientHeight, 2),
    ),
    divide(tileRect.height, 2),
  );
  let s = {
    left: scrollLeft,
    top: scrollTop,
    behavior,
  };
  console.log(container_e.scrollHeight, container_e.clientHeight);
  container_e.scrollTo(s);
}
