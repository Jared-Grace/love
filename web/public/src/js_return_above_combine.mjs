import { log } from "../../../love/public/src/log.mjs";
import { log_exit } from "../../../love/public/src/log_exit.mjs";
import { js_flo_name } from "../../../love/public/src/js_flo_name.mjs";
import { js_visit_returns_identifiers } from "../../../love/public/src/js_visit_returns_identifiers.mjs";
import { equal_by_not } from "../../../love/public/src/equal_by_not.mjs";
import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
import { js_identifier_is_if } from "../../../love/public/src/js_identifier_is_if.mjs";
import { list_single_if } from "../../../love/public/src/list_single_if.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { list_first_is } from "../../../love/public/src/list_first_is.mjs";
import { list_previous } from "../../../love/public/src/list_previous.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_return_above_combine(ast) {
  js_visit_returns_identifiers(ast, lambda2);
  let a = null;
  return a;
  function lambda2({ v, node, argument }) {
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
        log({
          only,
        });
        function lambda4() {
          const n = equal_by_not(id, argument, js_identifier_name);
          if (n) {
            return;
          }
          let init = property_get(only, "init");
          function lambda6() {
            let name = js_flo_name(ast);
            log_exit(name);
          }
          js_node_type_is_if(init, "Literal", lambda6);
        }
        js_identifier_is_if(id, lambda4);
      }
      list_single_if(declarations, lambda);
    }
    js_node_type_is_if(previous, "VariableDeclaration", lambda3);
  }
}
