import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { js_call_callee_name } from "../../../love/public/src/js_call_callee_name.mjs";
export function js_visit_calls_named(f_name, lambda, ast) {
  function lambda_inner(v) {
    let { node } = v;
    let name = js_call_callee_name(node);
    if (equal_not(name, f_name)) {
      return;
    }
    let args = object_property_get(node, "arguments");
    lambda({
      v,
      args,
    });
  }
  js_visit_type(ast, "CallExpression", lambda_inner);
}
