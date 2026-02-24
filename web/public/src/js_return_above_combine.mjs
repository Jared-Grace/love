import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
import { equal_by } from "../../../love/public/src/equal_by.mjs";
import { js_identifier_is_if } from "../../../love/public/src/js_identifier_is_if.mjs";
import { list_single_if } from "../../../love/public/src/list_single_if.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { list_first_is } from "../../../love/public/src/list_first_is.mjs";
import { list_previous } from "../../../love/public/src/list_previous.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_return_above_combine(ast) {
  function lambda(v) {
    let node = property_get(v, "node");
    let argument = property_get(node, "argument");
    function lambda2() {
      let stack = property_get(v, "stack");
      let e1 = list_get_end_1(stack);
      let l = list_is(e1);
      if (not(l)) {
        return;
      }
      let fi = list_first_is(e1, node);
      if (fi) {
        return;
      }
      let previous = list_previous(e1, node);
      function lambda3() {
        let declarations = property_get(previous, "declarations");
        function lambda(only) {
          let id = property_get(only, "id");
          function lambda4() {
            let eq = equal_by(id, argument, js_identifier_name);
            const n = not(eq);
            if (n) {
            }
          }
          js_identifier_is_if(id, lambda4);
        }
        list_single_if(declarations, lambda);
      }
      js_node_type_is_if(previous, "VariableDeclaration", lambda3);
    }
    js_identifier_is_if(argument, lambda2);
  }
  js_visit_type(ast, "ReturnStatement", lambda);
  let a = null;
  return a;
}
