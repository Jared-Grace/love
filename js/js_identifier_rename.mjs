import { js_visit_identifiers_nodes } from "./js_visit_identifiers_nodes.mjs";
import { property_set_if_equals_curried_right_3 } from "./property_set_if_equals_curried_right_3.mjs";
import { equal } from "./equal.mjs";
export function js_identifier_rename(ast, name_from, name_to) {
  if (equal(name_from, name_to)) {
    return;
  }
  let r = property_set_if_equals_curried_right_3("name", name_from, name_to);
  js_visit_identifiers_nodes(ast, r);
}
