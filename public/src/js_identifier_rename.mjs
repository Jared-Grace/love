import { property_equals } from "../../../love/public/src/property_equals.mjs";
import { js_visit_identifiers } from "../../../love/public/src/js_visit_identifiers.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_identifier_rename(ast, name_from, name_to) {
  if (equal(name_from, name_to)) {
    return;
  }
  function lambda(v) {
    let node = property_get(v, "node");
    if (property_equals(node, "name", name_from)) {
      property_set(node, "name", name_to);
    }
  }
  js_visit_identifiers(ast, lambda);
}
