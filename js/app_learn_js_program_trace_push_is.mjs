import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_program_trace_method_is } from "./app_learn_js_program_trace_method_is.mjs";
export function app_learn_js_program_trace_push_is(expression) {
  arguments_assert(arguments, 1);
  ("whether an expression is a call of .push on a plain name, as a.push(x) is");
  let r = app_learn_js_program_trace_method_is(expression, "push");
  return r;
}
