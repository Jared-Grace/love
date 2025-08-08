import {log} from './log.mjs';
import {js_visit} from "./js_visit.mjs";
import {js_visit_children_get} from "./js_visit_children_get.mjs";
import {js_node_type_is} from "./js_node_type_is.mjs";
import {js_node_is} from "./js_node_is.mjs";
export function js_visit_type(parsed, type, on_each) {
  js_visit(parsed, v => {
    let {node} = v;
    if (js_node_is(node) && js_node_type_is(node, type)) {
      on_each(v);
    }
  });
}
