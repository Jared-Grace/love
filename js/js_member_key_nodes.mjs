import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export function js_member_key_nodes(ast) {
  "Every name that is the key of something looked up on something else - the word after the dot. It reads like a name and is not one: nothing else can be put in its place and mean the same, and no scope ever binds it.";
  "The ones written inside brackets are left out, because there the word really is a name standing for a value, and whatever binds it binds it.";
  let members = js_list_type_nodes(ast, "MemberExpression");
  function fixed_is(node) {
    let computed = property_get(node, "computed");
    let written_after_a_dot = not(computed);
    return written_after_a_dot;
  }
  let keys = list_filter_map_property(members, fixed_is, "property");
  return keys;
}
