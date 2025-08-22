import { js_visit_type } from "./js_visit_type.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function js_identifiers_names(ast) {
  function lambda2(la) {
    function lambda(v) {
      let { node } = v;
      let value = object_property_get(node, "name");
      la(value);
    }
    js_visit_type(ast, "Identifier", lambda);
  }
  const names = list_adder_unique(lambda2);
  return names;
}
