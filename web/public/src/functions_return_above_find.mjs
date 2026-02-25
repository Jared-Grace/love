import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { js_visit_returns_identifiers } from "../../../love/public/src/js_visit_returns_identifiers.mjs";
import { functions_names_each } from "../../../love/public/src/functions_names_each.mjs";
export async function functions_return_above_find() {
  async function lambda2(f_name) {
    let ast = await function_ast(f_name);
    function lambda() {}
    js_visit_returns_identifiers(ast, lambda);
  }
  await functions_names_each(lambda2);
}
