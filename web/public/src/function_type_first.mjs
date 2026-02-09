import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { js_visit_nodes } from "../../../love/public/src/js_visit_nodes.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
import { js_node_type } from "../../../love/public/src/js_node_type.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export async function function_type_first(type) {
  let f_name = await function_current_get();
  let v = await function_parse_unaliased(f_name);
  let ast = object_property_get(v, "ast");
  function lambda2(la) {
    function lambda(node) {
      if (js_node_type(node) === type) {
        la(node);
      }
    }
    js_visit_nodes(ast, lambda);
  }
  let list = list_adder(lambda2);
  let first = list_first(list);
  return first;
}
