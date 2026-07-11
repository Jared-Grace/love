import { js_visit_declarators } from "../../../love/public/src/js_visit_declarators.mjs";
import { js_identifier_is_if } from "../../../love/public/src/js_identifier_is_if.mjs";
import { property_transform } from "../../../love/public/src/property_transform.mjs";
import { js_identifier_unique_ast } from "../../../love/public/src/js_identifier_unique_ast.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_visit_declarators_uniqueify(ast, copy) {
  function lambda(v) {
    let node = property_get(v, "node");
    let id = property_get(node, "id");
    function lambda4() {
      function lambda3(value) {
        let unique = js_identifier_unique_ast(ast, value);
        return unique;
      }
      property_transform(id, "name", lambda3);
    }
    js_identifier_is_if(id, lambda4);
  }
  js_visit_declarators(copy, lambda);
}
