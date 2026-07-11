import { js_visit_type_node } from "../../../love/public/src/js_visit_type_node.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_get_equal } from "../../../love/public/src/property_get_equal.mjs";
import { js_flo_name } from "../../../love/public/src/js_flo_name.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_filter_property_path_not } from "../../../love/public/src/list_filter_property_path_not.mjs";
import { js_operator_node_to_call } from "../../../love/public/src/js_operator_node_to_call.mjs";
import { js_operators_to_fn_name } from "../../../love/public/src/js_operators_to_fn_name.mjs";
import { js_imports_missing_add_specified } from "../../../love/public/src/js_imports_missing_add_specified.mjs";
export async function js_operators_to_calls_generic(ast, operators, properties, type) {
  let name = js_flo_name(ast);
  let usable = list_filter_property_path_not(operators, ["fn", "name"], name);
  function lambda(node) {
    let node_operator = property_get(node, "operator");
    function lambda2(o) {
      let matched = property_get_equal(o, "operator", node_operator);
      if (matched) {
        js_operator_node_to_call(node, o, properties);
      }
      return matched;
    }
    each(usable, lambda2);
  }
  js_visit_type_node(ast, type, lambda);
  let names = js_operators_to_fn_name(usable);
  await js_imports_missing_add_specified(ast, names);
  return;
}
