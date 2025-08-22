import { object_property_get } from "./object_property_get.mjs";
import { js_identifier_unique_ast } from "./js_identifier_unique_ast.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_function_id_add(ast) {
  function lambda(v) {
    let { node } = v;
    let id = object_property_get(node, "id");
    if (id === null) {
      let unique = js_identifier_unique_ast(ast, "lambda");
      let value = js_parse_expression(unique);
      object_property_set(node, "id", value);
    }
  }
  js_visit_type(ast, "FunctionExpression", lambda);
}
