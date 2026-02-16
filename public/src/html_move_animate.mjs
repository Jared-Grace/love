import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
export async function html_move_animate(
  component_from,
  component_to,
  duration = 500,
) {
  let from_e = html_component_element_get(component_from);
  let to_e = html_component_element_get(component_to);
  const movingRect = from_e.getBoundingClientRect();
  const targetRect = to_e.getBoundingClientRect();
  const offsetX = targetRect.left - movingRect.left;
  const offsetY = targetRect.top - movingRect.top;
  from_e.style.transition = `transform ${duration}ms`;
  from_e.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  await sleep(duration);
  function lambda() {
    from_e.style.transition = "";
    from_e.style.transform = "";
    to_e.parentNode.insertBefore(from_e, to_e);
  }
  setTimeout(lambda, duration);
}
