import { data_functions_get } from "./data_functions_get.mjs";
export async function js_await_add(ast) {
  let functions = await data_functions_get();
  let v2 = await js_await_add_inner(functions, ast); 
  return v2; 
}
