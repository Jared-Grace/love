import { js_variable_declaration_is_if } from "../../../love/public/src/js_variable_declaration_is_if.mjs";
import { js_identifiers_names_equal_not } from "../../../love/public/src/js_identifiers_names_equal_not.mjs";
import { js_literal_is_if } from "../../../love/public/src/js_literal_is_if.mjs";
import { list_includes_if } from "../../../love/public/src/list_includes_if.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { js_return_argument_set } from "../../../love/public/src/js_return_argument_set.mjs";
import { js_visit_returns_identifiers } from "../../../love/public/src/js_visit_returns_identifiers.mjs";
import { js_identifier_is_if } from "../../../love/public/src/js_identifier_is_if.mjs";
import { list_single_if } from "../../../love/public/src/list_single_if.mjs";
import { list_first_is } from "../../../love/public/src/list_first_is.mjs";
import { list_previous } from "../../../love/public/src/list_previous.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_return_above_combine(ast) {
  "this refactors two sequential statements to be one return statement";
  js_visit_returns_identifiers(ast, lambda2);
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
        function lambda4() {
          const n = js_identifiers_names_equal_not(id, argument);
          if (n) {
            return;
          }
          let init = property_get(only, "init");
          function lambda6() {
            let value = property_get(init, "value");
            let values = [null, false, true];
            list_includes_if(values, value, lambda_if);
            function lambda_if() {
              js_return_argument_set(node, init);
              list_remove(e1, previous);
            }
          }
          js_literal_is_if(init, lambda6);
        }
        js_identifier_is_if(id, lambda4);
      }
      list_single_if(declarations, lambda);
    }
    js_variable_declaration_is_if(previous, lambda3);
  }
}
