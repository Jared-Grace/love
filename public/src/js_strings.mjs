import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { text_is } from "../../../love/public/src/text_is.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_visit_types } from "../../../love/public/src/js_visit_types.mjs";
export function js_strings(ast) {
  function lambda2(la) {
    function lambda(v) {
      let node = object_property_get(v, "node");
      let value = null;
      function lambda5() {
        let quasis = object_property_get(node, "quasis");
        let s1 = list_size_1(quasis);
        if (s1) {
          let expressions = object_property_get(node, "expressions");
          let e = list_empty_is(expressions);
          if (e) {
            let q = list_first(quasis);
            let v2 = object_property_get(q, "value");
            value = object_property_get(v2, "raw");
          }
        }
      }
      js_node_type_is_if(node, "TemplateLiteral", lambda5);
      function lambda4() {
        value = object_property_get(node, "value");
      }
      js_node_type_is_if(node, "Literal", lambda4);
      let si2 = text_is(value);
      if (si2) {
        la(value);
      }
    }
    js_visit_types(ast, ["Literal", "TemplateLiteral"], lambda);
  }
  const names = list_adder_unique(lambda2);
  return names;
}
