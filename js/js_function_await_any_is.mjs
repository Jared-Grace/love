import { js_visit_type } from "./js_visit_type.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_stack_last_function } from "./js_stack_last_function.mjs";
import { equal } from "./equal.mjs";
export function js_function_await_any_is(ast, f) {
  function lambda2(la) {
    js_visit_type(ast, "AwaitExpression", la);
  }
  let vs = list_adder(lambda2);
  function owned_by_f(v) {
    let stack = property_get(v, "stack");
    let owner = js_stack_last_function(stack);
    let same = equal(owner, f);
    return same;
  }
  let owned = list_filter(vs, owned_by_f);
  let any = list_empty_not_is(owned);
  return any;
}
