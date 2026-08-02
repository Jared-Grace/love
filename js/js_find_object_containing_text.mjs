import { property_js_object_expression_properties } from "./property_js_object_expression_properties.mjs";
import { list_find_item_property } from "./list_find_item_property.mjs";
import { property_equals } from "./property_equals.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { list_any } from "./list_any.mjs";
import { property_get } from "./property_get.mjs";
export function js_find_object_containing_text(ast, text) {
  "One record out of a list of them, found by a word written inside it. Records";
  "kept in a list are told apart by something they say about themselves — a";
  "group by its heading, a setting by its label — so the word that names one to a";
  "reader is the same word that names it to a command.";
  "Only what the record says directly counts. A record holding another would";
  "otherwise answer to everything its inner one says, and then the outer and the";
  "inner are both correct answers with no way to ask for the one meant.";
  let vs = js_list_type(ast, "ObjectExpression");
  function containing_is(v) {
    let properties = property_js_object_expression_properties(v, "node");
    function says_is(property) {
      let value = property_get(property, "value");
      let literal_is = js_literal_is(value);
      if (literal_is) {
        let same = property_equals(value, "value", text);
        return same;
      }
      return false;
    }
    let says = list_any(properties, says_is);
    return says;
  }
  let found = list_find_item_property(vs, containing_is, "node");
  return found;
}
