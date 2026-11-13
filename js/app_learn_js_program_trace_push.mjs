import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists_assert } from "./property_exists_assert.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { list_get } from "./list_get.mjs";
import { app_learn_js_program_trace_value } from "./app_learn_js_program_trace_value.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
export function app_learn_js_program_trace_push(
  expression,
  actions,
  code,
  values,
) {
  arguments_assert(arguments, 4);
  ("an a.push(x); line run: what is in its ( ) worked out, then added to the end of the array the name holds, each added to actions, and the name given the longer array in values");
  ("2026-11-13, at the human's asking, for Adding to an array: the push is its own kind of step, not an assign, since only one item arrives and the rest of the array stays as it was. The array is copied rather than changed, so a value handed out earlier still says what it said then");
  let callee = property_get(expression, "callee");
  let object = property_get(callee, "object");
  let name = property_get(object, "name");
  property_exists_assert(values, name);
  let args = property_get(expression, "arguments");
  list_size_assert(args, 1);
  let arg = list_get(args, 0);
  let value = app_learn_js_program_trace_value(arg, actions, code, values);
  let before = property_get(values, name);
  let after = list_concat(before, [value]);
  list_add(actions, {
    kind: "push",
    name,
    value,
    after,
    from: property_get(arg, "start"),
    to: property_get(arg, "end"),
  });
  property_set(values, name, after);
}
