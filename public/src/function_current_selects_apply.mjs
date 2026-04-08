import { function_current_selects_add } from "../../../love/public/src/function_current_selects_add.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { function_current_selects_first } from "../../../love/public/src/function_current_selects_first.mjs";
export async function function_current_selects_apply(apply_fn_name) {
  let r = await function_current_selects_first();
  let n = await function_run(apply_fn_name, [r]);
  let value = await function_current_selects_add(item_to_add, on_previous);
  return n;
}
