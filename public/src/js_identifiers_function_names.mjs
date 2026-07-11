import { js_visit_types } from "../../../love/public/src/js_visit_types.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
export function js_identifiers_function_names(ast) {
  function lambda2(la) {
    function lambda(v) {
      let node = property_get(v, "node");
      let type = property_get(node, "type");
      let is_declaration = equal(type, "FunctionDeclaration");
      if (is_declaration) {
        let id = property_get(node, "id");
        let is_identifier = js_identifier_is(id);
        if (is_identifier) {
          let name = property_get(id, "name");
          la(name);
        }
      } else {
        let local = property_get(node, "local");
        let name = property_get(local, "name");
        la(name);
      }
    }
    js_visit_types(ast, ["FunctionDeclaration", "ImportSpecifier"], lambda);
  }
  const names = list_adder_unique(lambda2);
  return names;
}
