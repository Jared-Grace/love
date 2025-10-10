import { js_declaration_single_name } from "../../../love/public/src/js_declaration_single_name.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { js_code_call } from "../../../love/public/src/js_code_call.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function js_bang_to_not(ast) {
  marker("1");
  let name = js_declaration_single_name(ast);
  if (equal(name, not.name)) {
    return;
  }
  function lambda(v) {
    let { node } = v;
    let { operator } = node;
    if (equal(operator, "!")) {
      let argument = object_property_get(node, "argument");
      let copy = object_copy(argument);
      let code = js_code_call(not.name);
      let expression = js_parse_expression(code);
      let arguments2 = object_property_get(expression, "arguments");
      list_add(arguments2, copy);
      object_replace(node, expression);
    }
  }
  js_visit_type(ast, "UnaryExpression", lambda);
  return;
}
