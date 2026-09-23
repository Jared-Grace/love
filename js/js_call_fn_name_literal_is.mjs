import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_first } from "./list_first.mjs";
export function js_call_fn_name_literal_is(node) {
  arguments_assert(arguments, 1);
  ("Whether this node is a function's name written as a marked reference - the marker call with one plain string inside it and nothing else.");
  ("Such a call is a unit in the same way the string inside it is. It does nothing when it runs but hand its string back, so where it stands in the code is never a question about what runs; it is only a question of how the line reads.");
  let call_is = js_node_type_is(node, "CallExpression");
  if (not(call_is)) {
    return false;
  }
  let callee = property_get(node, "callee");
  let named_is = js_node_type_is(callee, "Identifier");
  if (not(named_is)) {
    return false;
  }
  let callee_name = property_get(callee, "name");
  let marker_is = equal(callee_name, fn_name("fn_name"));
  if (not(marker_is)) {
    return false;
  }
  let args = property_get(node, "arguments");
  let one_is = list_size_1(args);
  if (not(one_is)) {
    return false;
  }
  let arg = list_first(args);
  let literal_is = js_node_type_is(arg, "Literal");
  if (not(literal_is)) {
    return false;
  }
  let value = property_get(arg, "value");
  let string_is = equal(typeof value, "string");
  return string_is;
}
