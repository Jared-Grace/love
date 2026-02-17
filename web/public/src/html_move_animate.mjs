import { html_bounding_client_rect } from "../../../love/public/src/html_bounding_client_rect.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export async function html_move_animate(
  component_from,
  component_to,
  duration,
) {
  let to_e = html_component_element_get(component_to);
  const targetRect = html_bounding_client_rect(component_to);
  let from_e = html_component_element_get(component_from);
  const movingRect = html_bounding_client_rect(component_from);
  const offsetX = targetRect.left - movingRect.left;
  const offsetY = targetRect.top - movingRect.top;
  from_e.style.transition = `transform ${duration}ms`;
  from_e.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  await sleep(duration);
  from_e.style.transition = "";
  from_e.style.transform = "";
}
