import { marker } from "../../../love/public/src/marker.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function js_identifier_rename(ast, name_from, name_to) {
  marker("1");
  if (equal(name_from, name_to)) {
    return;
  }
  function lambda(v) {
    let { node } = v;
    if (object_property_get(node, "name") === name_from) {
      object_property_set(node, "name", name_to);
    }
  }
  js_visit_type(ast, "Identifier", lambda);
}
