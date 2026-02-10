import { js_identifiers_named_count } from "../../../love/public/src/js_identifiers_named_count.mjs";
import { list_not_is } from "../../../love/public/src/list_not_is.mjs";
import { js_identifier_not_is } from "../../../love/public/src/js_identifier_not_is.mjs";
import { list_next_try } from "../../../love/public/src/list_next_try.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { js_node_type_not_is } from "../../../love/public/src/js_node_type_not_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { js_declare_single } from "../../../love/public/src/js_declare_single.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_assign_combine(ast) {
  function lambda(v) {
    let { node, stack } = v;
    let declaration = js_declare_single(node);
    if (null_is(declaration)) {
      return;
    }
    let e1 = list_get_end_1(stack);
    let nl = list_not_is(e1);
    if (nl) {
      return;
    }
    let next = list_next_try(e1, node);
    if (null_is(next)) {
      return;
    }
    let declaration2 = js_declare_single(next);
    if (null_is(declaration2)) {
      return;
    }
    let init2 = property_get(declaration2, "init");
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
        list_remove(e1, node);
      }
    }
  }
  js_visit_type(ast, "VariableDeclaration", lambda);
}
