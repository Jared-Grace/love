import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
export async function html_move_animate_translate(
  component,
  offsetX,
  offsetY,
  duration,
) {
  html_style_set(component, "transition", `transform ${duration}ms`);
  let e = html_component_element_get(component);
  const u = `translate(${offsetX}px, ${offsetY}px)`;
  e.style.transform = u;
  await sleep(duration);
}
