import { object_property_get } from "./object_property_get.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
import { log } from "./log.mjs";
import { js_imports_all } from "./js_imports_all.mjs";
export function js_await_add(ast) {
  function lambda(v) {
    marker("1");
  }
  js_visit_type(ast, "CallExpression", lambda);
}
