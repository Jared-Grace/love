import { counter } from "../../../love/public/src/counter.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_identifiers_named_count(ast, i_name) {
  function lambda3(c) {
    function lambda2(v) {
      let node = property_get(v, "node");
      let name = property_get(node, "name");
      if (name === i_name) {
        c();
      }
    }
    js_visit_type(ast, "Identifier", lambda2);
  }
  let count = counter(lambda3);
  return count;
}
