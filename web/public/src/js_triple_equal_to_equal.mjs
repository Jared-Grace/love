import { js_operator_triple_equal } from "../../../love/public/src/js_operator_triple_equal.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_call_arguments_get } from "../../../love/public/src/js_call_arguments_get.mjs";
import { js_flo_name } from "../../../love/public/src/js_flo_name.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { js_code_call } from "../../../love/public/src/js_code_call.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_imports_missing_add_specified_single } from "../../../love/public/src/js_imports_missing_add_specified_single.mjs";
export async function js_triple_equal_to_equal(ast) {
  let o = js_operator_triple_equal();
  let operator = property_get(o, "operator");
  let fn = property_get(o, "fn");
  let properties = ["left", "right"];
  let type = "BinaryExpression";
  let name = js_flo_name(ast);
  if (equal(name, fn.name)) {
    ("return");
  }
  function lambda(v) {
    let node = property_get(v, "node");
    let node_operator = property_get(node, "operator");
    if (equal(node_operator, operator)) {
      let code = js_code_call(fn.name);
      let expression = js_parse_expression(code);
      let arguments2 = js_call_arguments_get(expression);
      function lambda2(p) {
        let lr = property_get(node, p);
        let copy = object_copy(lr);
        list_add(arguments2, copy);
      }
      let mapped = list_map(properties, lambda2);
      object_replace(node, expression);
    }
  }
  js_visit_type(ast, type, lambda);
  await js_imports_missing_add_specified_single(ast, fn.name);
  return;
}
