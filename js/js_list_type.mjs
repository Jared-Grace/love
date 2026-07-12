import { js_visit_type } from "./js_visit_type.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_list_type(ast, node_type) {
  function lambda(la) {
    js_visit_type(ast, node_type, la);
  }
  let vs = list_adder(lambda);
  return vs;
}
