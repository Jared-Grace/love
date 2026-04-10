import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { function_current_selects_replace } from "../../../love/public/src/function_current_selects_replace.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { function_current_selects_first } from "../../../love/public/src/function_current_selects_first.mjs";
export async function function_current_selects_apply(apply_fn_name) {
  let r = await function_current_selects_first();
  let f_name_current = await function_current_get();
  let result = await function_run(apply_fn_name, [r]);
  let r3 = await function_current_selects_replace(r, result);
  return r3;
}
