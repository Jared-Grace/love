import { data_functions_get } from "./data_functions_get.mjs";
import { js_await_remove_inner } from "./js_await_remove_inner.mjs";
export async function js_await_remove(ast) {
  let functions = await data_functions_get();
  let visited = [];
  let r = await js_await_remove_inner(functions, ast, visited);
  return r;
}
