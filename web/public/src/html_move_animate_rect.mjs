import { hypotenuse } from "../../../love/public/src/hypotenuse.mjs";
import { html_move_animate_translate } from "../../../love/public/src/html_move_animate_translate.mjs";
export async function html_move_animate_rect(
  component,
  rect_from,
  rect_to,
  duration,
) {
  const x = rect_to.left - rect_from.left;
  const y = rect_to.top - rect_from.top;
  await html_move_animate_translate(component, x, y, duration);
  let distance = hypotenuse(x, y);
  let r = {
    distance,
  };
  return r;
}
