import { js_identifiers_named_count } from "./js_identifiers_named_count.mjs";
import { list_not_is } from "./list_not_is.mjs";
import { js_identifier_not_is } from "./js_identifier_not_is.mjs";
import { list_next_try } from "./list_next_try.mjs";
import { list_remove } from "./list_remove.mjs";
import { property_set } from "./property_set.mjs";
import { equal } from "./equal.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_declare_single } from "./js_declare_single.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_declare_init_get } from "./js_declare_init_get.mjs";
export function js_assign_combine(ast) {
  function lambda(v) {
    let stack = property_get(v, "stack");
    let node = property_get(v, "node");
    let declaration = js_declare_single(node);
    if (null_is(declaration)) {
      return;
    }
    let e = list_get_end_1(stack);
    let nl = list_not_is(e);
    if (nl) {
      return;
    }
    let next = list_next_try(e, node);
    if (null_is(next)) {
      return;
    }
    let declaration2 = js_declare_single(next);
    if (null_is(declaration2)) {
      return;
    }
    let init2 = js_declare_init_get(declaration2);
    let nti = js_node_type_not_is(init2, "Identifier");
    if (nti) {
      return;
    }
    let name2 = property_get(init2, "name");
    let id = property_get(declaration, "id");
    let nti2 = js_identifier_not_is(id);
    if (nti2) {
      return;
    }
    let name = property_get(id, "name");
    if (equal(name2, name)) {
      let count = js_identifiers_named_count(ast, name);
      if (count === 2) {
        let init = property_get(declaration, "init");
        property_set(declaration2, "init", init);
        list_remove(e, node);
      }
    }
  }
  js_visit_type(ast, "VariableDeclaration", lambda);
}
