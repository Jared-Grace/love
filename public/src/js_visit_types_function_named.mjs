import { js_identifier_is_if } from "../../../love/public/src/js_identifier_is_if.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_types_function } from "../../../love/public/src/js_visit_types_function.mjs";
export function js_visit_types_function_named(ast, lambda$v, name) {
  function lambda(v) {
    let node = property_get(v, "node");
    let id = property_get(node, "id");
    function lambda3() {
      let name2 = property_get(id, "name");
      let eq2 = equal(left, name);
      if (ideq2) {
      }
    }
    js_identifier_is_if(id, lambda3);
  }
  let r = js_visit_types_function(ast, lambda);
  return r;
}
