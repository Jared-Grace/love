import { js_visit } from "./js_visit.mjs";
import { marker } from "./marker.mjs";
export function js_bang_to_not(ast) {
  marker("1");
  function lambda(v) {}
  js_visit(ast2, lambda);
}
