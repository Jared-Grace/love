import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { not_equal } from "./not_equal.mjs";
import { error } from "./error.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_program_trace_value } from "./app_code_program_trace_value.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_program_trace_log(expression, actions, code, values) {
  arguments_assert(arguments, 4);
  ("a console.log line run: what is in its ( ) worked out and then logged, each added to actions; any other call is refused");
  let callee = property_get(expression, "callee");
  let called = js_unparse(callee);
  if (not_equal(called, "console.log")) {
    error({
      message: "only console.log can be called here",
      code,
      called,
    });
  }
  let args = property_get(expression, "arguments");
  list_size_assert(args, 1);
  let arg = list_get(args, 0);
  let value3 = app_code_program_trace_value(arg, actions, code, values);
  list_add(actions, {
    kind: "log",
    value: value3,
  });
}
