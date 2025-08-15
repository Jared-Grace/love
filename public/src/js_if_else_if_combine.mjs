import { list_get_end_1 } from "./list_get_end_1.mjs";
import { log } from "./log.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
export function js_if_else_if_combine(ast) {
  function lambda(v) {
    let { node, stack } = v;
    let e1 = list_get_end_1(stack);
    log(e1);
  }
  js_visit_type(ast, "IfStatement", lambda);
}
