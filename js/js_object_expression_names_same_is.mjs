import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { js_property_key_name_try } from "./js_property_key_name_try.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { equal } from "./equal.mjs";
export function js_object_expression_names_same_is(node, names) {
  arguments_assert(arguments, 2);
  ("$plain node");
  ("Whether this is a written-out record filing exactly these names, in this order, and nothing else.");
  ("What this is for is telling a call that has already been through a move from one that has not. A move that gathers a row of arguments into a record has to be safe to run twice, and the only thing separating the two is what the one argument standing there turns out to be.");
  ("A name worked out while the program runs counts as a difference rather than being passed over, because a record with such a name in it is one nobody can say the pieces of, and this is asked in order to decide whether it is safe to leave a call alone.");
  let recorded = js_node_type_is(node, "ObjectExpression");
  if (not(recorded)) {
    return false;
  }
  let properties = property_get(node, "properties");
  let held = [];
  for (let property of properties) {
    let name = js_property_key_name_try(property);
    if (null_is(name)) {
      return false;
    }
    list_add(held, name);
  }
  let held_text = list_join_comma(held);
  let names_text = list_join_comma(names);
  let same = equal(held_text, names_text);
  return same;
}
