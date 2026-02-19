import { js_visit_nodes_lambda } from "../../../love/public/src/js_visit_nodes_lambda.mjs";
import { property_set_if_equals } from "../../../love/public/src/property_set_if_equals.mjs";
import { js_visit_identifiers } from "../../../love/public/src/js_visit_identifiers.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
export function js_identifier_rename(ast, name_from, name_to) {
  if (equal(name_from, name_to)) {
    return;
  }
  function lambda2(node) {
    property_set_if_equals(node, "name", name_from, name_to);
  }
  let lambda = js_visit_nodes_lambda(lambda2);
  js_visit_identifiers(ast, lambda);
}
