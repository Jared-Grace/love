import { property_list_empty_is } from "./property_list_empty_is.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { property_get } from "./property_get.mjs";
export function js_literals_generic(ast, value_is) {
  "Every written-out value in one file that the handed-in reading recognises, each kept beside the place in the file it stands.";
  "Finding them is one walk whatever kind of value is wanted, and the kind was the only thing the walk over written-out words had in it that was about words. So the kind is handed in and the walk is shared, which is what lets a written-out number be found by the same eleven lines that find a written-out word rather than by a second copy of them.";
  "A word written between backticks counts as one written value when there is nothing being worked out inside it, because that is a word somebody wrote and not a line of work. It arrives as the raw text between the marks, so a reading that wants numbers passes over it, which is right - a number written that way is a word.";
  function lambda2(la) {
    function lambda(v) {
      let node = property_get(v, "node");
      let value = null;
      function lambda5() {
        let quasis = property_get(node, "quasis");
        let s = list_size_1(quasis);
        if (s) {
          let e = property_list_empty_is(node, "expressions");
          if (e) {
            let v2 = list_first_property(quasis, "value");
            value = property_get(v2, "raw");
          }
        }
      }
      js_node_type_is_if(node, "TemplateLiteral", lambda5);
      function lambda4() {
        value = property_get(node, "value");
      }
      js_node_type_is_if(node, "Literal", lambda4);
      let si = value_is(value);
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
