import {error} from './error.mjs';
import {list_is} from './list_is.mjs';
import {list_first} from './list_first.mjs';
import {list_empty_is} from './list_empty_is.mjs';
import {marker} from './marker.mjs';
import {js_node_type_is} from './js_node_type_is.mjs';
import {js_node_is} from './js_node_is.mjs';
import {list_get_end} from './list_get_end.mjs';
import { string_is } from './string_is.mjs';
export function js_marker_named(v, marker_name) {
  let {stack} = v;
  let stack1 = list_get_end(stack, 1);
  if (!js_node_is(stack1)) {
    return false;
  }
  if (!js_node_type_is(stack1, "ExpressionStatement")) {
    return false;
  }
  let {node} = v;
  let {callee} = node;
  if (!js_node_type_is(callee, "Identifier")) {
    return false;
  }
  let {name} = callee;
  if (name !== marker.name) {
    return false;
  }
  let {arguments: arguments2} = node;
  if (list_empty_is(arguments2)) {
    return false;
  }
  let a_first = list_first(arguments2);
  if (!js_node_type_is(a_first, "Literal")) {
    return false;
  }
  let stack2 = list_get_end(stack, 2);
  if (!list_is(stack2)) {
    error();
  }
  if ((marker_name) !== null) {

  let {value} = a_first;
  if (value !== marker_name) {
    return false;
  }
  }
  return true;
}
