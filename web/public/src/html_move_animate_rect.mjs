import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { html_move_animate_translate } from "../../../love/public/src/html_move_animate_translate.mjs";
export async function html_move_animate_rect(component, from, to, duration) {
  html_style_set(component, "transition", `transform ${duration}ms`);
  const offsetX = from.left - to.left;
  const offsetY = from.top - to.top;
  await html_move_animate_translate(offsetX, offsetY, component, duration);
}
