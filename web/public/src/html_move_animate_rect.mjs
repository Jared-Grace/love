import { html_move_animate_translate } from "../../../love/public/src/html_move_animate_translate.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export async function html_move_animate_rect(component, from, to, duration) {
  let e = html_component_element_get(component);
  e.style.transition = `transform ${duration}ms`;
  const offsetX = from.left - to.left;
  const offsetY = from.top - to.top;
  await html_move_animate_translate(offsetX, offsetY, e, duration);
}
