import { js_visit_function_nodes } from "../../../love/public/src/js_visit_function_nodes.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
export function js_visit_function_nodes_names(ast, la) {
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
}
