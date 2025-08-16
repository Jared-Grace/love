import { log } from "./log.mjs";
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
  let i = 0;
  let stack1 = list_get_end(stack, 1);
  if (!js_node_is(stack1)) {
    log(i++);
    let v2 = null;
    return v2;
  }
  if (!js_node_type_is(stack1, "ExpressionStatement")) {
    log(i++);
    let v3 = null;
    return v3;
  }
  let { node } = v;
  let { callee } = node;
  if (!js_node_type_is(callee, "Identifier")) {
    log(i++);
    let v4 = null;
    return v4;
  }
  let { name } = callee;
  if (name !== marker.name) {
    log(i++);
    let v5 = null;
    return v5;
  }
  let { arguments: arguments2 } = node;
  if (list_empty_is(arguments2)) {
    log(i++);
    let v6 = null;
    return v6;
  }
  let a_first = list_first(arguments2);
  if (!js_node_type_is(a_first, "Literal")) {
    log(i++);
    let v7 = null;
    return v7;
  }
  let stack2 = list_get_end(stack, 2);
  if (!list_is(stack2)) {
    log(i++);
    error();
  }
  let { value } = a_first;
  log(value);
  return value;
}
