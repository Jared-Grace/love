import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
export async function html_move_animate_translate(
  component,
  offsetX,
  offsetY,
  duration,
) {
  let e = html_component_element_get(component);
  const u = `translate(${offsetX}px, ${offsetY}px)`;
  e.style.transform = u;
  await sleep(duration);
}
