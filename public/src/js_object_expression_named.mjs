import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_object_expression_named(ast) {
  function lambda2(la) {
    function lambda(v) {
      let node = property_get(v, "node");
      let stack = property_get(v, "stack");
      let e1 = list_get_end_1(stack);
      function lambda3() {
        let id = property_get(e1, "id");
        function lambda4() {
          let name = js_identifier_name(id);
        }
        js_node_type_is_if(id, "Identifier", lambda4);
        log({
          node,
          e1,
        });
      }
      js_node_type_is_if(e1, "VariableDeclarator", lambda3);
    }
    js_visit_type(ast, node_type, lambda);
  }
  let list = list_adder(lambda2);
  let node_type = "ObjectExpression";
  return;
  let elements = property_get(node, "elements");
  return elements;
  const js_dollar_arguments = {
    remaining,
    node,
    stack1,
    stack2,
    stack3,
    ast,
    afters,
  };
}
