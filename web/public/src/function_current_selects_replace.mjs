import { function_current_selects_add } from "../../../love/public/src/function_current_selects_add.mjs";
import { list_remove_curried_right } from "../../../love/public/src/list_remove_curried_right.mjs";
export async function function_current_selects_replace(r, result) {
  let r2 = list_remove_curried_right(r);
  let r3 = await function_current_selects_add(result, r2);
  return r3;
}
