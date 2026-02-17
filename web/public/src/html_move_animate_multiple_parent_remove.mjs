import { html_move_animate_multiple } from "../../../love/public/src/html_move_animate_multiple.mjs";
import { html_parent_remove_multiple } from "../../../love/public/src/html_parent_remove_multiple.mjs";
export async function html_move_animate_multiple_parent_remove(
  froms,
  tos,
  duration,
) {
  await html_move_animate_multiple(duration, froms, tos);
  html_parent_remove_multiple(froms);
}
