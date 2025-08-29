import { null_is } from "./null_is.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_declare_single } from "./js_declare_single.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
export function js_assign_combine(ast) {
  return;
  marker("1");
  function lambda(v) {
    let { node, stack } = v;
    let declaration = js_declare_single(node);
    if (null_is(value)) {
    }
    let e1 = list_get_end_1(stack);
  }
  js_visit_type(ast, "VariableDeclaration", lambda);
}
