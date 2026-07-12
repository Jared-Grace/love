import { function_transform } from "./function_transform.mjs";
import { function_current_selects_nodes_ast } from "./function_current_selects_nodes_ast.mjs";
import { function_import } from "./function_import.mjs";
import { function_current_get } from "./function_current_get.mjs";
export async function function_current_selects_apply_generic(
  apply_fn_name,
  args,
) {
  let f_name_current = await function_current_get();
  let imported_fn = await function_import(apply_fn_name);
  async function lambda(ast) {
    let selects = await function_current_selects_nodes_ast(ast);
    await imported_fn(ast, selects, ...args);
  }
  let output = await function_transform(f_name_current, lambda);
}
