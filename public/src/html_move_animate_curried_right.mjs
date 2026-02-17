import { html_move_animate } from "../../../love/public/src/html_move_animate.mjs";
export async function html_move_animate_curried_right(duration) {
  let r2 = async function html_move_animate_curried_right_result(
    component_from,
    component_to,
  ) {
    let r = await html_move_animate(component_from, component_to, duration);
    return r;
  };
  return r2;
}
