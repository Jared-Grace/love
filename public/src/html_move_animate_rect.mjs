import { html_move_animate_translate } from "../../../love/public/src/html_move_animate_translate.mjs";
export async function html_move_animate_rect(component, from, to, duration) {
  const offsetX = from.left - to.left;
  const offsetY = from.top - to.top;
  await html_move_animate_translate(component, offsetX, offsetY, duration);
}
