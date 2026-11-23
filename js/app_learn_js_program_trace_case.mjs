import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists_assert } from "./property_exists_assert.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { text_is_assert } from "./text_is_assert.mjs";
import { equal } from "./equal.mjs";
import { text_upper_to } from "./text_upper_to.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_add } from "./list_add.mjs";
export function app_learn_js_program_trace_case(expression, actions, values) {
  arguments_assert(arguments, 3);
  ("an s.toUpperCase() or s.toLowerCase() run on a plain name holding a string: the string it gives back, every letter a capital or every letter small, added to actions. The name keeps the string it held, since a string is never changed by these, only a new one given back");
  ("2026-11-23, at the human's asking, for the toUpperCase lessons: a function called, as reverse is, so it is chosen as Solve an expression, then what it is called on, then what it does. Only a plain name is called on, as with pop and reverse, so a lesson takes s[0] into a name of its own first. Not picked: s[0].toUpperCase() straight away, which would need a piece solved before the call and is a step the step-through cannot draw yet");
  let callee = property_get(expression, "callee");
  let object = property_get(callee, "object");
  let name = property_get(object, "name");
  property_exists_assert(values, name);
  let args = property_get(expression, "arguments");
  list_size_assert(args, 0);
  let before = property_get(values, name);
  text_is_assert(before);
  let property = property_get(callee, "property");
  let method = property_get(property, "name");
  let upper = equal(method, "toUpperCase");
  let after = upper ? text_upper_to(before) : text_lower_to(before);
  list_add(actions, {
    kind: method,
    method,
    name,
    value: after,
    before,
    from: property_get(expression, "start"),
    to: property_get(expression, "end"),
  });
  return after;
}
