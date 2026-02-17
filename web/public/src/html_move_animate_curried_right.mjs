import { html_move_animate } from "../../../love/public/src/html_move_animate.mjs";
export async function html_move_animate_curried_right(duration) {
  return async function html_move_animate_curried_right_result(
    component_from,
    component_to,
  ) {
    return await html_move_animate(component_from, component_to, duration);
  };
}
