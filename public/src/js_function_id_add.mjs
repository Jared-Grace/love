import { object_property_get } from "./object_property_get.mjs";
import { js_identifier_unique_ast } from "./js_identifier_unique_ast.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_function_id_add(ast) {
  js_visit_type(ast, "FunctionDeclaration", function lambda(v) {
    let { node } = v;
    let unique = js_identifier_unique_ast(ast, "lambda");
    object_property_set(node, "id", "FunctionDeclaration");
    let id = object_property_get(node, "id");
    if (id === null) {
    }
  });
}
