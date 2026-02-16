import { html_move_animate_rect } from "../../../love/public/src/html_move_animate_rect.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export async function html_move_animate(
  component_from,
  component_to,
  duration,
) {
  let to_e = html_component_element_get(component_to);
  const targetRect = to_e.getBoundingClientRect();
  await html_move_animate_rect(component_from, targetRect, duration);
}
