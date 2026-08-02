import { property_list_get_end_1 } from "./property_list_get_end_1.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { equal } from "./equal.mjs";
import { js_identifier_name } from "./js_identifier_name.mjs";
import { property_get } from "./property_get.mjs";
export function js_object_expression_named_generic(ast, node_type, search) {
  "instead of this, markers should be used so that the source code explicitly captures reference from another file";
  function lambda2(la) {
    function lambda(v) {
      let e = property_list_get_end_1(v, "stack");
      function lambda3() {
        let id = property_get(e, "id");
        function lambda4() {
          let name = js_identifier_name(id);
          if (equal(name, search)) {
            let node = property_get(v, "node");
            la(node);
          }
        }
        js_node_type_is_if(id, "Identifier", lambda4);
      }
      js_node_type_is_if(e, "VariableDeclarator", lambda3);
    }
    js_visit_type(ast, node_type, lambda);
  }
  let list = list_adder(lambda2);
  return list;
}
