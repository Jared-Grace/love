import { error } from "../../../love/public/src/error.mjs";
import { function_current_selects_nodes } from "../../../love/public/src/function_current_selects_nodes.mjs";
import { function_import } from "../../../love/public/src/function_import.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
export async function function_current_selects_apply(apply_fn_name) {
  let ast2 = error();
  let selects = await function_current_selects_nodes(ast2);
  let f_name_current = await function_current_get();
  let imported_fn = await function_import(apply_fn_name);
  function lambda(ast) {
    imported_fn(ast, selects);
  }
  let output = await function_transform(f_name_current, lambda);
}
