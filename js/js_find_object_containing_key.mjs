import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { property_js_object_expression_properties } from "./property_js_object_expression_properties.mjs";
import { js_object_property_key_name_or_null } from "./js_object_property_key_name_or_null.mjs";
import { equal } from "./equal.mjs";
import { list_any } from "./list_any.mjs";
import { list_find_item_property } from "./list_find_item_property.mjs";
export function js_find_object_containing_key(ast, key_name) {
  "One record, found by a key it already has. A register - a record pointing names at the things they run - holds no written words to find it by, only names, so the twin that finds a record by a word written inside it never reaches one; a key the register already answers to is how a person names it.";
  "Only the record's own keys count, never those of a record inside it, for the same reason as in the twin: otherwise the outer and the inner would both answer.";
  arguments_assert(arguments, 2);
  let vs = js_list_type(ast, "ObjectExpression");
  function containing_is(v) {
    let properties = property_js_object_expression_properties(v, "node");
    function keyed_is(property) {
      let name = js_object_property_key_name_or_null(property);
      let eq = equal(name, key_name);
      return eq;
    }
    let has = list_any(properties, keyed_is);
    return has;
  }
  let found = list_find_item_property(vs, containing_is, "node");
  return found;
}
