import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { js_arrow_to_function_node } from "../../../love/public/src/js_arrow_to_function_node.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_code_arrow } from "../../../love/public/src/js_code_arrow.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
export function js_dollar_f({ node, afters, stack1 }) {
  const code = js_code_arrow();
  let parsed = js_parse_expression(code);
  js_arrow_to_function_node(parsed);
  function lambda3() {}
  js_node_type_is_if(node2, type, lambda3);
  list_add(afters, lambda);
  function lambda() {
    object_replace(node, parsed);
  }
}
