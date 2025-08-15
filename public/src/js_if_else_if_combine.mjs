import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
export function js_if_else_if_combine(ast) {
  marker("1");
  function lambda(v) {}
  js_visit_type(ast, type, lambda);
}
