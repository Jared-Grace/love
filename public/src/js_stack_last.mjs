import {list_last} from './list_last.mjs';
import {js_node_type_is} from './js_node_type_is.mjs';
import {js_node_is} from './js_node_is.mjs';
import {list_filter} from './list_filter.mjs';
export function js_stack_last(stack, type) {
  let stack_nodes = list_filter(stack, js_node_is);
  let fds = list_filter(stack_nodes, n => js_node_type_is(n, type));
  let last = list_last(fds);
  return last;
}
