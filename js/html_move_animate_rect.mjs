import { hypotenuse } from "./hypotenuse.mjs";
import { html_move_animate_translate } from "./html_move_animate_translate.mjs";
import { subtract } from "./subtract.mjs";
export async function html_move_animate_rect(
  component,
  rect_from,
  rect_to,
  duration,
) {
  let x = subtract(rect_to.left, rect_from.left);
  let y = subtract(rect_to.top, rect_from.top);
  await html_move_animate_translate(component, x, y, duration);
  let distance = hypotenuse(x, y);
  let r = {
    distance,
  };
  return r;
}
