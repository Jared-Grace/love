import { list_adder_unique } from "./list_adder_unique.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { text_is } from "./text_is.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { list_first } from "./list_first.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { property_get } from "./property_get.mjs";
export function js_strings_generic(ast) {
  function lambda2(la) {
    function lambda(v) {
      let node = property_get(v, "node");
      let value = null;
      function lambda5() {
        let quasis = property_get(node, "quasis");
        let s = list_size_1(quasis);
        if (s) {
          let expressions = property_get(node, "expressions");
          let e = list_empty_is(expressions);
          if (e) {
            let q = list_first(quasis);
            let v2 = property_get(q, "value");
            value = property_get(v2, "raw");
          }
        }
      }
      js_node_type_is_if(node, "TemplateLiteral", lambda5);
      function lambda4() {
        value = property_get(node, "value");
      }
      js_node_type_is_if(node, "Literal", lambda4);
      let si = text_is(value);
      if (si) {
        la({
          value,
          node,
        });
      }
    }
    js_visit_types(ast, ["Literal", "TemplateLiteral"], lambda);
  }
  let results = list_adder_unique(lambda2);
  return results;
}
