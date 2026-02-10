import { js_declaration_single_name } from "../../../love/public/src/js_declaration_single_name.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { js_code_call } from "../../../love/public/src/js_code_call.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function js_bang_to_not(ast) {
  let name = js_declaration_single_name(ast);
  if (equal(name, not.name)) {
    return;
  }
  function lambda(v) {
    let node = property_get(v, "node");
    let operator = property_get(node, "operator");
    if (equal(operator, "!")) {
      let argument = property_get(node, "argument");
      let copy = object_copy(argument);
      let code = js_code_call(not.name);
      let expression = js_parse_expression(code);
      let arguments2 = property_get(expression, "arguments");
      list_add(arguments2, copy);
      object_replace(node, expression);
    }
  }
  js_visit_type(ast, "UnaryExpression", lambda);
  return;
}
