import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { js_flo_name } from "../../../love/public/src/js_flo_name.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_operator_node_to_call } from "../../../love/public/src/js_operator_node_to_call.mjs";
import { js_imports_missing_add_specified } from "../../../love/public/src/js_imports_missing_add_specified.mjs";
export async function js_operators_to_calls_binary(ast, operators) {
  let properties = ["left", "right"];
  let type = "BinaryExpression";
  let name = js_flo_name(ast);
  function lambda_not_self(o) {
    let fn = property_get(o, "fn");
    let is_self = equal(name, fn.name);
    return !is_self;
  }
  let usable = list_filter(operators, lambda_not_self);
  function lambda(v) {
    let node = property_get(v, "node");
    let node_operator = property_get(node, "operator");
    function lambda2(o) {
      let operator = property_get(o, "operator");
      let matched = equal(node_operator, operator);
      if (matched) {
        let fn = property_get(o, "fn");
        js_operator_node_to_call(node, fn, properties);
      }
      return matched;
    }
    each(usable, lambda2);
  }
  js_visit_type(ast, type, lambda);
  function lambda3(o) {
    let fn = property_get(o, "fn");
    return fn.name;
  }
  let names = list_map(usable, lambda3);
  await js_imports_missing_add_specified(ast, names);
  return;
}
