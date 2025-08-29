import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_next } from "./list_next.mjs";
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
    if (null_is(declaration)) {
      return;
    }
    let init = object_property_get(declaration, "init");
    let nti = js_node_type_not_is(node2, type);
    let e1 = list_get_end_1(stack);
    let next = list_next(e1, node);
    let declaration2 = js_declare_single(next);
    if (null_is(declaration2)) {
      return;
    }
  }
  js_visit_type(ast, "VariableDeclaration", lambda);
}
