import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function js_list_type(ast, node_type) {
  function lambda(la) {
    js_visit_type(ast, node_type, la);
  }
  const vs = list_adder(lambda);
  return vs;
}
