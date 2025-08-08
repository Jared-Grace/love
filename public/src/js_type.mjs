import {js_visit_type} from './js_visit_type.mjs';
import {list_adder} from './list_adder.mjs';
export function js_type(ast, node_type) {
  return list_adder(la => {
    js_visit_type(ast, node_type, la);
  });
}
