import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { js_return_above_combine } from "../../../love/public/src/js_return_above_combine.mjs";
import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { functions_names_each } from "../../../love/public/src/functions_names_each.mjs";
export async function functions_return_above_find() {
  async function lambda2(f_name) {
    let ast = await function_ast(f_name);
    js_return_above_combine(ast);
    async function lambda(ast2) {}
    let output = await function_transform(f_name2, lambda);
  }
  await functions_names_each(lambda2);
  async function lambda3(ast3) {}
  let waited = await functions_transform(lambda3);
}
