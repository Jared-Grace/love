import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { string_is } from "../../../love/public/src/string_is.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
export function js_string_literals(ast) {
  function lambda2(la) {
    function lambda(v) {
      let node = object_property_get(v, "node");
      let value = object_property_get(node, "value");
      function lambda4() {}
      js_node_type_is_if(node2, type, lambda4);
      let si2 = string_is(value);
      if (si2) {
        la(value);
      }
    }
    js_visit_types(ast, ["Literal", "TemplateLiteral"], lambda);
  }
  const names = list_adder_unique(lambda2);
  return names;
}
