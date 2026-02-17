import { html_move_animate_multiple_parent_remove } from "../../../love/public/src/html_move_animate_multiple_parent_remove.mjs";
export async function html_move_animate_multiple_parent_remove_curried(froms) {
  let r2 =
    async function html_move_animate_multiple_parent_remove_curried_result(
      tos,
      duration,
    ) {
      let r = await html_move_animate_multiple_parent_remove(
        froms,
        tos,
        duration,
      );
      return r;
    };
  return r2;
}
