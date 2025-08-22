import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
export function js_log_remove(ast) {
  marker("1");
  function lambda(v) {}
  js_visit_type(ast2, type, lambda);
}
