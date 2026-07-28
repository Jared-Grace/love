import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export function js_call_of_named(node, f_name) {
  "A call to the named function, whether it is awaited or not - the await sits";
  "between the binding and the call and would otherwise hide it.";
  let missing = null_is(node);
  if (missing) {
    return false;
  }
  let type = property_get_or_null(node, "type");
  let awaited = equal(type, "AwaitExpression");
  if (awaited) {
    let inner = property_get(node, "argument");
    let r = js_call_of_named(inner, f_name);
    return r;
  }
  let call = equal(type, "CallExpression");
  if (not(call)) {
    return false;
  }
  let callee = property_get_or_null(node, "callee");
  let name = property_get_or_null(callee, "name");
  let same = equal(name, f_name);
  return same;
}
