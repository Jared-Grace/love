import { js_null_get } from "./js_null_get.mjs";
import { js_declare_assign_init_set } from "./js_declare_assign_init_set.mjs";
export function js_declare_assign_null(ast) {
  let value_get = js_null_get();
  js_declare_assign_init_set(ast, value_get);
}
