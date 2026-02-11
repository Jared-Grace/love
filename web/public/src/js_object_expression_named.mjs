import { equal } from "../../../love/public/src/equal.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_object_expression_named(ast, search) {
  function lambda2(la) {
    function lambda(v) {
      let stack = property_get(v, "stack");
      let e1 = list_get_end_1(stack);
      function lambda3() {
        let id = property_get(e1, "id");
        function lambda4() {
          let name = js_identifier_name(id);
          if (equal(name, search)) {
          }
          let node = property_get(v, "node");
          la(node);
        }
        js_node_type_is_if(id, "Identifier", lambda4);
      }
      js_node_type_is_if(e1, "VariableDeclarator", lambda3);
    }
    let node_type = "ObjectExpression";
    js_visit_type(ast, node_type, lambda);
  }
  let list = list_adder(lambda2);
  return list;
  let elements = property_get(node, "elements");
  return elements;
}
