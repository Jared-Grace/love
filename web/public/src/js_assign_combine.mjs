import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
export function js_assign_combine(ast) {
  return;
  marker("1");
  function lambda(v) {
    let { node } = v;
  }
  js_visit_type(ast, "VariableDeclaration", lambda);
}
