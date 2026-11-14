import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_program_trace_method_is } from "./app_learn_js_program_trace_method_is.mjs";
export function app_learn_js_program_trace_push_is(expression) {
  arguments_assert(arguments, 1);
  ("whether an expression is a call of .push or .unshift on a plain name, as a.push(x) and a.unshift(x) are; both add one item, at one end or the other");
  let r =
    app_learn_js_program_trace_method_is(expression, "push") ||
    app_learn_js_program_trace_method_is(expression, "unshift");
  return r;
}
