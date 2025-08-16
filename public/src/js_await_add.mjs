import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
import { log } from "./log.mjs";
import { js_imports_all } from "./js_imports_all.mjs";
export function js_await_add(ast) {
  marker("1");
  function lambda(v) {}
  js_visit_type(ast, "CallExpression", lambda);
}
