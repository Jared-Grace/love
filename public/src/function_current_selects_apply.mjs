import { list_map } from "../../../love/public/src/list_map.mjs";
import { function_current_selects } from "../../../love/public/src/function_current_selects.mjs";
import { function_import } from "../../../love/public/src/function_import.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
export async function function_current_selects_apply(apply_fn_name) {
  let selects = await function_current_selects();
  let f_name_current = await function_current_get();
  let imported_fn = await function_import(apply_fn_name);
  function lambda(ast) {
    function lambda2(item) {}
    let mapped = list_map(list, lambda2);
    imported_fn(ast, selects);
  }
  let output = await function_transform(f_name_current, lambda);
}
