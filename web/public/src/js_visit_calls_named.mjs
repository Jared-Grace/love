import { js_visit_type } from "./js_visit_type.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { equal_not } from "./equal_not.mjs";
import { js_call_callee_name } from "./js_call_callee_name.mjs";
export function js_visit_calls_named(f_name_current, lambda, ast) {
  function lambda2(v) {
    let { node } = v;
    let name = js_call_callee_name(node);
    if (equal_not(name, f_name_current)) {
      return;
    }
    let args = object_property_get(node, "arguments");
    lambda({
      v,
      args,
    });
  }
  js_visit_type(ast, "CallExpression", lambda2);
}
