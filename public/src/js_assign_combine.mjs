import { equal } from "./equal.mjs";
import { log } from "./log.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_next } from "./list_next.mjs";
import { null_is } from "./null_is.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_declare_single } from "./js_declare_single.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_assign_combine(ast) {
  let a = 1;
  let b = a;
  function lambda(v) {
    let { node, stack } = v;
    let declaration = js_declare_single(node);
    if (null_is(declaration)) {
      return;
    }
    let e1 = list_get_end_1(stack);
    let next = list_next(e1, node);
    let declaration2 = js_declare_single(next);
    if (null_is(declaration2)) {
      return;
    }
    let init2 = object_property_get(declaration2, "init");
    let nti = js_node_type_not_is(init2, "Identifier");
    if (nti) {
      return;
    }
    let name2 = object_property_get(init2, "name");
    let id = object_property_get(declaration, "id");
    let name = object_property_get(id, "name");
    if (equal(name2, name)) {
      log(name);
    }
  }
  js_visit_type(ast, "VariableDeclaration", lambda);
}
