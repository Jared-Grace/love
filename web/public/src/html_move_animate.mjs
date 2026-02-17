import { sleep } from "../../../love/public/src/sleep.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export async function html_move_animate(
  component_from,
  component_to,
  duration,
) {
  let to_e = html_component_element_get(component_to);
  const targetRect = to_e.getBoundingClientRect();
  let from_e = html_component_element_get(component_from);
  const movingRect = from_e.getBoundingClientRect();
  const offsetX = targetRect.left - movingRect.left;
  const offsetY = targetRect.top - movingRect.top;
  from_e.style.transition = `transform ${duration}ms`;
  from_e.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  await sleep(duration);
  from_e.style.transition = "";
  from_e.style.transform = "";
}
