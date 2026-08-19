import { property_not } from "./property_not.mjs";
import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
export function js_object_key_nodes(ast) {
  "Every written value that is naming a field of an object rather than standing for one - the part before the colon.";
  "It reads like a value and is not one. Nothing else can be put in its place and mean the same: a call written there is not a call at all, it is a field named by the letters of the call, and a number written there is the name of a field spelled with digits.";
  "The ones written inside brackets are left out, because there the value really is worked out and whatever is written there is read as work.";
  let properties = js_list_type_nodes(ast, "Property");
  function fixed_is(node) {
    let written_before_a_colon = property_not(node, "computed");
    return written_before_a_colon;
  }
  let keys = list_filter_map_property(properties, fixed_is, "key");
  return keys;
}
