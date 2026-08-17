import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
export function app_a_function_lambda8(la, ast) {
  arguments_assert(arguments, 2);
  js_visit_type_node(ast, "FunctionDeclaration", on_node);
  function on_node(n) {
    let id = property_get(n, "id");
    function lambda9() {
      let name = property_get(id, "name");
      la(name);
    }
    js_node_type_is_if(id, "Identifier", lambda9);
  }
}
