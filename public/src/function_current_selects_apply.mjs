import { function_import } from "../../../love/public/src/function_import.mjs";
import { function_current_selects_on_previous } from "../../../love/public/src/function_current_selects_on_previous.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { function_current_selects_first } from "../../../love/public/src/function_current_selects_first.mjs";
export async function function_current_selects_apply(apply_fn_name) {
  let r = await function_current_selects_first();
  let f_name_current = await function_current_get();
  let imported_fn = await function_import(apply_fn_name);
  function lambda(ast) {
    imported_fn(ast);
  }
  let output = await function_transform(f_name_current, lambda);
  let result = await function_run(apply_fn_name, [r]);
  let r3 = await function_current_selects_on_previous(r, result);
  return r3;
}
