import { html_move_animate_translate } from "../../../love/public/src/html_move_animate_translate.mjs";
export async function html_move_animate_rect(
  component,
  rect_from,
  rect_to,
  duration,
) {
  const offsetX = rect_to.left - rect_from.left;
  const offsetY = rect_to.top - rect_from.top;
  await html_move_animate_translate(component, offsetX, offsetY, duration);
}
