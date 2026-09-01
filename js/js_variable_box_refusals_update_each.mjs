import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function js_variable_box_refusals_update_each(ast, named_is, refusals) {
  "Gathers the reasons one name in a file may not be put in a box, from every record and every list taken apart there, and hands back the places a name is counted up or down where it stands together with the reading that refuses those.";
  arguments_assert(arguments, 3);
  let patterns = js_list_type_nodes(ast, "ObjectPattern");
  function pattern_each(pattern) {
    let properties = property_get(pattern, "properties");
    function property_each(entry) {
      let value = property_get(entry, "value");
      let is = named_is(value);
      if (is) {
        list_add(refusals, "it is written by taking a record apart");
      }
    }
    each(properties, property_each);
  }
  each(patterns, pattern_each);
  let arrays = js_list_type_nodes(ast, "ArrayPattern");
  function array_each(pattern2) {
    let elements = property_get(pattern2, "elements");
    function element_each(element) {
      let is = named_is(element);
      if (is) {
        list_add(refusals, "it is written by taking a list apart");
      }
    }
    each(elements, element_each);
  }
  each(arrays, array_each);
  let updates = js_list_type_nodes(ast, "UpdateExpression");
  function update_each(update) {
    let argument = property_get(update, "argument");
    let is = named_is(argument);
    if (is) {
      list_add(refusals, "it is counted up or down where it stands");
    }
  }
  let r = {
    updates,
    update_each,
  };
  return r;
}
