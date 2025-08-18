import { not } from "./not.mjs";
import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { js_call_new_expression } from "./js_call_new_expression.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { equal } from "./equal.mjs";
import { log } from "./log.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_visit } from "./js_visit.mjs";
import { marker } from "./marker.mjs";
export async function js_bang_to_not(ast) {
  marker("1");
  !0;
  async function lambda(v) {
    let { node } = v;
    let { operator } = node;
    if (equal(operator, "!")) {
      let argument = object_property_get(node, "argument");
      let expression = await js_call_new_expression(not.name, ast);
      log({
        expression,
      });
    }
    log(node);
  }
  await js_visit_type_each_async(ast, "UnaryExpression", lambda);
}
