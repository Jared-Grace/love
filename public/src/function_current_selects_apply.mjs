import { list_remove_curried_right } from "../../../love/public/src/list_remove_curried_right.mjs";
import { function_current_selects_add } from "../../../love/public/src/function_current_selects_add.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { function_current_selects_first } from "../../../love/public/src/function_current_selects_first.mjs";
export async function function_current_selects_apply(apply_fn_name) {
  let r = await function_current_selects_first();
  let result = await function_run(apply_fn_name, [r]);
  let r2 = list_remove_curried_right(r);
  let r3 = await function_current_selects_add(result, r2);
  return r3;
}
