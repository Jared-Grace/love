import { object_property_get } from "./object_property_get.mjs";
import { equal } from "./equal.mjs";
import { log } from "./log.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_visit } from "./js_visit.mjs";
import { marker } from "./marker.mjs";
export function js_bang_to_not(ast) {
  marker("1");
  !0;
  function lambda(v) {
    let { node } = v;
    let { operator } = node;
    if (equal(operator, "!")) {
      let argument = object_property_get(node, "argument");
    }
    log(node);
  }
  js_visit_type(ast, "UnaryExpression", lambda);
}
