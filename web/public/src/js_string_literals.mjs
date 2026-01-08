import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function js_string_literals(ast) {
  function lambda2(la) {
    function lambda(v) {
      let node = object_property_get(v, "node");
      let value = object_property_get(node, "name");
      la(value);
    }
    js_visit_type(ast, "Identifier", lambda);
  }
  const names = list_adder_unique(lambda2);
  return names;
}
