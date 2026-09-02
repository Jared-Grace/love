import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_call_name_or_null(node) {
  "$plain node";
  "The plain name a call is made under, or nothing where it is made through something that has no name of its own. Read-only, pure.";
  "A call written on an object is named by the part after the dot, because that is the word a reader would say the call was to. Anything else - a call on the answer of another call, a call on something built there and then - has no single word standing for it, and inventing one would put a name in a report that matches nothing anybody could search for.";
  "Nothing is an ordinary answer here and never a fault. Most questions asked of calls are asked of every call in a file, and the ones with no name are simply the ones the question is not about.";
  arguments_assert(arguments, 1);
  let callee = property_get_or_null(node, "callee");
  let nowhere = null_is(callee);
  if (nowhere) {
    return null;
  }
  let plain = js_node_type_is(callee, "Identifier");
  if (plain) {
    let named = property_get_or_null(callee, "name");
    return named;
  }
  let reached = js_node_type_is(callee, "MemberExpression");
  if (reached) {
    let property = property_get_or_null(callee, "property");
    let unnamed = null_is(property);
    if (unnamed) {
      return null;
    }
    let after_the_dot = property_get_or_null(property, "name");
    return after_the_dot;
  }
  return null;
}
