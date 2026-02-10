import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_identifier_unique_ast } from "../../../love/public/src/js_identifier_unique_ast.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
export function js_function_id_add(ast) {
  function lambda(v) {
    let { node } = v;
    let id = property_get(node, "id");
    if (id === null) {
      let unique = js_identifier_unique_ast(ast, "lambda");
      let value = js_parse_expression(unique);
      property_set(node, "id", value);
    }
  }
  js_visit_type(ast, "FunctionExpression", lambda);
}
