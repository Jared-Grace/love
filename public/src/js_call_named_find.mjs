import { list_adder_single } from "../../../love/public/src/list_adder_single.mjs";
import { js_visit_calls_named_nodes } from "../../../love/public/src/js_visit_calls_named_nodes.mjs";
export function js_call_named_find(ast, unaliased) {
  function lambda(la) {
    js_visit_calls_named_nodes(ast, unaliased, la);
  }
  let only = list_adder_single(lambda);
  return only;
}
