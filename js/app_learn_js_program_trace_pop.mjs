import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists_assert } from "./property_exists_assert.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { subtract } from "./subtract.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
export function app_learn_js_program_trace_pop(
  expression,
  actions,
  code,
  values,
) {
  arguments_assert(arguments, 4);
  ("an a.pop() run: the last item of the array the name holds taken off, added to actions, the name given the shorter array in values, and the item taken off answered, since a.pop() gives it back");
  ("2026-11-13, at the human's asking, for Taking an item off: the pop is its own kind of step, as the push is, since only the last item goes and the rest of the array stays as it was. The array is copied rather than changed, so a value handed out earlier still says what it said then. from and to are where a.pop() is written, so a line logging it can show the item in its place");
  let callee = property_get(expression, "callee");
  let object = property_get(callee, "object");
  let name = property_get(object, "name");
  property_exists_assert(values, name);
  let args = property_get(expression, "arguments");
  list_size_assert(args, 0);
  let before = property_get(values, name);
  let value = before[subtract(before.length, 1)];
  let after = before.slice(0, -1);
  let property = property_get(callee, "property");
  list_add(actions, {
    kind: "pop",
    name,
    value,
    after,
    from: property_get(expression, "start"),
    to: property_get(expression, "end"),
  });
  property_set(values, name, after);
  return value;
}
