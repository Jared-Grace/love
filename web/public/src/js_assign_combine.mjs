import { list_size } from "./list_size.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
export function js_assign_combine(ast) {
  return;
  marker("1");
  function lambda(v) {
    let { node } = v;
    let { declarations } = node;
    let size = list_size(list);
  }
  js_visit_type(ast, "VariableDeclaration", lambda);
}
