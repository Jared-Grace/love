import { html_move_animate_translate } from "../../../love/public/src/html_move_animate_translate.mjs";
export async function html_move_animate_rect(
  component,
  from,
  rect_from,
  duration,
) {
  const offsetX = from.left - rect_from.left;
  const offsetY = from.top - rect_from.top;
  await html_move_animate_translate(component, offsetX, offsetY, duration);
}
