import { js_declare_single_identifier_is_if } from "./js_declare_single_identifier_is_if.mjs";
import { js_identifiers_names_equal_not } from "./js_identifiers_names_equal_not.mjs";
import { js_literal_is_if } from "./js_literal_is_if.mjs";
import { list_includes_if } from "./list_includes_if.mjs";
import { list_remove } from "./list_remove.mjs";
import { js_return_argument_set } from "./js_return_argument_set.mjs";
import { js_visit_returns_identifiers } from "./js_visit_returns_identifiers.mjs";
import { list_first_is } from "./list_first_is.mjs";
import { list_previous } from "./list_previous.mjs";
import { not } from "./not.mjs";
import { list_is } from "./list_is.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { property_get } from "./property_get.mjs";
export function js_return_above_combine(ast) {
  "this refactors two sequential statements to be one return statement";
  js_visit_returns_identifiers(ast, lambda2);
  function lambda2({ v, node, argument }) {
    let stack = property_get(v, "stack");
    let e = list_get_end_1(stack);
    let l = list_is(e);
    if (not(l)) {
      return;
    }
    let fi = list_first_is(e, node);
    if (fi) {
      return;
    }
    function lambda4(init) {
      let n = js_identifiers_names_equal_not(id, argument);
      if (n) {
        return;
      }
      function lambda6() {
        let value = property_get(init, "value");
        let values = [null, false, true];
        list_includes_if(values, value, lambda_if);
        function lambda_if() {
          js_return_argument_set(node, init);
          list_remove(e, previous);
        }
      }
      js_literal_is_if(init, lambda6);
    }
    let previous = list_previous(e, node);
    js_declare_single_identifier_is_if(previous, lambda4);
  }
}
