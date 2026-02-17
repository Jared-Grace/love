import { list_wait } from "../../../love/public/src/list_wait.mjs";
import { list_map_pairs } from "../../../love/public/src/list_map_pairs.mjs";
import { html_parent_remove } from "../../../love/public/src/html_parent_remove.mjs";
import { html_move_animate } from "../../../love/public/src/html_move_animate.mjs";
export async function html_move_animate_multiple_parent_remove(
  froms,
  tos,
  duration,
) {
  async function lambda6(a, b) {
    await html_move_animate(a, b, duration);
    html_parent_remove(a);
  }
  let mapped = list_map_pairs(froms, tos, lambda6);
  let v = await list_wait(mapped);
}
