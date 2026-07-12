import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_visit_calls } from "./js_visit_calls.mjs";
import { property_get } from "./property_get.mjs";
import { equal_not } from "./equal_not.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
export function js_visit_calls_named(ast, f_name, lambda) {
  function lambda_inner(v) {
    let node = property_get(v, "node");
    let name = js_call_callee_name_try(node);
    if (equal_not(name, f_name)) {
      return;
    }
    let args = js_call_arguments_get(node);
    lambda({
      v,
      args,
    });
  }
  js_visit_calls(ast, lambda_inner);
  return;
}
