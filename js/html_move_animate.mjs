import { html_move_animate_rect } from "./html_move_animate_rect.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
export async function html_move_animate(
  component_from,
  component_to,
  duration,
) {
  let rect_from = html_bounding_client_rect(component_from);
  let rect_to = html_bounding_client_rect(component_to);
  await html_move_animate_rect(component_from, rect_from, rect_to, duration);
}
