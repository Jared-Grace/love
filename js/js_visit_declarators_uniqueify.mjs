import { property_path_get_2 } from "./property_path_get_2.mjs";
import { js_visit_declarators } from "./js_visit_declarators.mjs";
import { js_identifier_is_if } from "./js_identifier_is_if.mjs";
import { property_transform } from "./property_transform.mjs";
import { js_identifier_unique_ast } from "./js_identifier_unique_ast.mjs";
export function js_visit_declarators_uniqueify(ast, copy) {
  function lambda2(v) {
    let id = property_path_get_2(v, "node", "id");
    function lambda4() {
      function lambda3(value) {
        let unique = js_identifier_unique_ast(ast, value);
        return unique;
      }
      property_transform(id, "name", lambda3);
    }
    js_identifier_is_if(id, lambda4);
  }
  js_visit_declarators(copy, lambda2);
}
