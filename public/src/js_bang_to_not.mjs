import { object_replace } from "./object_replace.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { not } from "./not.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { equal } from "./equal.mjs";
import { log } from "./log.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_visit } from "./js_visit.mjs";
import { marker } from "./marker.mjs";
import { list_add } from "./list_add.mjs";
export function js_bang_to_not(ast) {
  marker("1");
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
}
