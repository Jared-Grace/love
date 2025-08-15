import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
export function js_if_else_if_combine(ast) {
  function lambda(v) {}
  marker("1");
  js_visit_type(ast, "IfStatement", lambda);
}
