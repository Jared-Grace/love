import { js_null } from "../../../love/public/src/js_null.mjs";
import { js_declare_assign } from "../../../love/public/src/js_declare_assign.mjs";
export function js_declare_assign_null(ast) {
  js_declare_assign(ast, lambda);
  function lambda() {
    let value = js_null();
    return value;
  }
}
