import { lambda_get } from "../../../love/public/src/lambda_get.mjs";
import { js_null } from "../../../love/public/src/js_null.mjs";
import { js_declare_assign_init_set } from "../../../love/public/src/js_declare_assign_init_set.mjs";
export function js_declare_assign_null(ast) {
  let value = js_null();
  let value_get = lambda_get(value);
  js_declare_assign_init_set(ast, value_get);
}
