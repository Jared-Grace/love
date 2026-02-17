import { list_map_pairs_wait } from "../../../love/public/src/list_map_pairs_wait.mjs";
import { html_move_animate_curried_right } from "../../../love/public/src/html_move_animate_curried_right.mjs";
export async function html_move_animate_multiple(froms, tos, duration) {
  let r2 = await html_move_animate_curried_right(duration);
  await list_map_pairs_wait(froms, tos, r2);
}
