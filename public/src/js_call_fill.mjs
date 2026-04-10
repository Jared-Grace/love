import { js_call_fill_inner } from "../../../love/public/src/js_call_fill_inner.mjs";
import { data_functions_get } from "../../../love/public/src/data_functions_get.mjs";
import { js_visit_type_each_async } from "../../../love/public/src/js_visit_type_each_async.mjs";
export async function js_call_fill(ast) {
  let functions = await data_functions_get();
  let visited = [];
  async function lambda(v) {
    await js_call_fill_inner(v, ast, functions, visited);
  }
  await js_visit_type_each_async(ast, "ExpressionStatement", lambda);
  return;
}
