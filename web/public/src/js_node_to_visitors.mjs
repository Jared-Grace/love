import { not } from "../../../love/public/src/not.mjs";
import { set_on_first } from "../../../love/public/src/set_on_first.mjs";
import { object_properties_equal } from "../../../love/public/src/object_properties_equal.mjs";
import { js_import_specifier_is } from "../../../love/public/src/js_import_specifier_is.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_visit } from "../../../love/public/src/js_visit.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_node_to_visitors(ast, node_search) {
  function lambda2(la) {
    function lambda3(sa) {
      function lambda(v) {
        let node = property_get(v, "node");
        if (node === node_search) {
          let add_to_list = true;
          let stack = property_get(v, "stack");
          let e1 = list_get_end_1(stack);
          let type_is = js_import_specifier_is(e1);
          if (type_is) {
            let eq = object_properties_equal(e1, ["imported", "imported"]);
            if (eq) {
              let first = sa(node);
              if (not(first)) {
                add_to_list = false;
              }
            }
          }
          if (add_to_list) {
            la(v);
          }
        }
      }
      js_visit(ast, lambda);
    }
    set_on_first(lambda3);
  }
  let matches = list_adder(lambda2);
  return matches;
}
