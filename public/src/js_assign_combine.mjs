import { list_single } from "./list_single.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
export function js_assign_combine(ast) {
  return;
  marker("1");
  function lambda(v) {
    let { node } = v;
    let { declarations } = node;
    let s1 = list_size_1(declarations);
    if (s1) {
      let only = list_single(list);
    }
  }
  js_visit_type(ast, "VariableDeclaration", lambda);
}
