import { js_code_call } from "../../../love/public/src/js_code_call.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_call_arguments_get } from "../../../love/public/src/js_call_arguments_get.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_operator_node_to_call(node, o, properties) {
  let fn = property_get(o, "fn");
  let code = js_code_call(fn.name);
  let expression = js_parse_expression(code);
  let arguments2 = js_call_arguments_get(expression);
  function lambda(p) {
    let lr = property_get(node, p);
    let copy = object_copy(lr);
    list_add(arguments2, copy);
  }
  list_map(properties, lambda);
  object_replace(node, expression);
  return;
}
