import { not } from "./not.mjs";
import { error } from "./error.mjs";
import { list_is } from "./list_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { marker } from "./marker.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
export function js_marker_name_get(v) {
  let { stack } = v;
  let stack1 = list_get_end(stack, 1);
  let a = js_node_is(stack1);
  if (not(a)) {
    let v2 = null;
    return v2;
  }
  let a2 = js_node_type_is(stack1, "ExpressionStatement");
  if (not(a2)) {
    let v3 = null;
    return v3;
  }
  let { node } = v;
  let { callee } = node;
  let a3 = js_node_type_is(callee, "Identifier");
  if (not(a3)) {
    let v4 = null;
    return v4;
  }
  let { name } = callee;
  if (name !== marker.name) {
    let v5 = null;
    return v5;
  }
  let { arguments: arguments2 } = node;
  if (list_empty_is(arguments2)) {
    let v6 = null;
    return v6;
  }
  let a_first = list_first(arguments2);
  let a4 = js_node_type_is(a_first, "Literal");
  if (not(a4)) {
    let v7 = null;
    return v7;
  }
  let stack2 = list_get_end(stack, 2);
  let a5 = list_is(stack2);
  if (not(a5)) {
    error();
  }
  let { value } = a_first;
  return value;
}
