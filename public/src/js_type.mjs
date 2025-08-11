import {js_visit_type} from './js_visit_type.mjs';
import {list_adder} from './list_adder.mjs';
export function js_type(ast, node_type) {
    const vs = list_adder(la => {
        js_visit_type(ast, node_type, la);
    });
  return vs;
}
