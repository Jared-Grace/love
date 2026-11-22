import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists_assert } from "./property_exists_assert.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
export function app_learn_js_program_trace_reverse(
  expression,
  actions,
  values,
) {
  arguments_assert(arguments, 3);
  ("an a.reverse(); line run: the array the name holds turned around, its last item first, added to actions, and the name given the turned array in values");
  ("2026-11-22, at the human's asking, for the reverse lesson: a reverse is a function called, as a push and a pop are, so it is chosen as Solve an expression and then by what it does. It is a step of its own kind, since every item moves rather than one arriving or leaving, so the note is written again whole, as an assign writes it. The array is copied rather than changed, so a value handed out earlier still says what it said then");
  let callee = property_get(expression, "callee");
  let object = property_get(callee, "object");
  let name = property_get(object, "name");
  property_exists_assert(values, name);
  let args = property_get(expression, "arguments");
  list_size_assert(args, 0);
  let before = property_get(values, name);
  let after = before.slice().reverse();
  list_add(actions, {
    kind: "reverse",
    method: "reverse",
    name,
    value: after,
    after,
    from: property_get(expression, "start"),
    to: property_get(expression, "end"),
  });
  property_set(values, name, after);
  return after;
}
