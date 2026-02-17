import { html_move_animate_rect } from "../../../love/public/src/html_move_animate_rect.mjs";
import { html_bounding_client_rect } from "../../../love/public/src/html_bounding_client_rect.mjs";
export async function html_move_animate(
  component_from,
  component_to,
  duration,
) {
  const rect_from = html_bounding_client_rect(component_from);
  const rect_to = html_bounding_client_rect(component_to);
  await html_move_animate_rect(component_from, rect_from, rect_to, duration);
}
