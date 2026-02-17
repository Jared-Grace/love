import { html_move_animate_curried_right } from "../../../love/public/src/html_move_animate_curried_right.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_wait } from "../../../love/public/src/list_wait.mjs";
import { list_map_pairs } from "../../../love/public/src/list_map_pairs.mjs";
import { html_parent_remove } from "../../../love/public/src/html_parent_remove.mjs";
export async function html_move_animate_multiple_parent_remove(
  froms,
  tos,
  duration,
) {
  let r2 = await html_move_animate_curried_right(duration);
  let mapped = list_map_pairs(froms, tos, r2);
  let v = await list_wait(mapped);
  each(froms, html_parent_remove);
}
