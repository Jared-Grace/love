import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
export async function html_move_animate(
  component_from,
  component_to,
  duration = 500,
) {
  let e = html_component_element_get(component);
  let container_e = html_component_element_get(container);
  const movingRect = component_from.getBoundingClientRect();
  const targetRect = component_to.getBoundingClientRect();
  const offsetX = targetRect.left - movingRect.left;
  const offsetY = targetRect.top - movingRect.top;
  component_from.style.transition = `transform ${duration}ms`;
  component_from.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  await sleep(duration);
  function lambda() {
    component_from.style.transition = "";
    component_from.style.transform = "";
    component_to.parentNode.insertBefore(component_from, component_to);
  }
  setTimeout(lambda, duration);
}
