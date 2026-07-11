import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_visit_function_nodes } from "../../../love/public/src/js_visit_function_nodes.mjs";
export function js_function_type_name_starts_with(ast) {
  function lambda2(la) {
    js_visit_function_nodes(ast, la);
  }
  let list = list_adder(lambda2);
  return list;
}
