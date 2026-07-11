import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { js_visit_function_nodes } from "../../../love/public/src/js_visit_function_nodes.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
export function js_identifiers_function_names(ast) {
  function lambda2(la) {
    function lambda_declaration(v) {
      let node = property_get(v, "node");
      let id = property_get(node, "id");
      let is_identifier = js_identifier_is(id);
      if (is_identifier) {
        let name = property_get(id, "name");
        la(name);
      }
    }
    js_visit_function_nodes(ast, lambda_declaration);
    function lambda_import(v) {
      let node = property_get(v, "node");
      let local = property_get(node, "local");
      let name = property_get(local, "name");
      la(name);
    }
    js_visit_type(ast, "ImportSpecifier", lambda_import);
  }
  const names = list_adder_unique(lambda2);
  return names;
}
