import { js_visit_declarators } from "../../../love/public/src/js_visit_declarators.mjs";
import { js_identifier_is_if } from "../../../love/public/src/js_identifier_is_if.mjs";
import { property_change } from "../../../love/public/src/property_change.mjs";
import { js_identifier_unique_ast } from "../../../love/public/src/js_identifier_unique_ast.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_visit_declarators_uniqueify(ast, copy) {
  function lambda2(v) {
    let node2 = property_get(v, "node");
    let id2 = property_get(node2, "id");
    function lambda4() {
      function lambda3(value) {
        let unique = js_identifier_unique_ast(ast, value);
        return unique;
      }
      property_change(id2, "name", lambda3);
    }
    js_identifier_is_if(id2, lambda4);
  }
  js_visit_declarators(copy, lambda2);
}
