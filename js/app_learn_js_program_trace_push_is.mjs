import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export function app_learn_js_program_trace_push_is(expression) {
  arguments_assert(arguments, 1);
  ("whether an expression is a call of .push on a plain name, as a.push(x) is");
  let left = property_get(expression, "type");
  let b = equal(left, "CallExpression");
  if (not(b)) {
    return false;
  }
  let callee = property_get(expression, "callee");
  let left2 = property_get(callee, "type");
  let b2 = equal(left2, "MemberExpression");
  if (not(b2)) {
    return false;
  }
  if (property_get(callee, "computed")) {
    return false;
  }
  let object = property_get(callee, "object");
  let property = property_get(callee, "property");
  let left3 = property_get(object, "type");
  let r =
    equal(left3, "Identifier") && equal(property_get(property, "name"), "push");
  return r;
}
