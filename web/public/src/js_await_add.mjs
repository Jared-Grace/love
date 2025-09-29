import { data_functions_get } from "./data_functions_get.mjs";
import { js_await_add_inner } from "./js_await_add_inner.mjs";
export async function js_await_add(ast) {
  let functions = await data_functions_get();
  let visited = [];
  let v2 = await js_await_add_inner(functions, ast, visited);
  return v2;
}
