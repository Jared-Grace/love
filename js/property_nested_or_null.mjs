import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function property_nested_or_null(
  object,
  property_name,
  nested_property_name,
) {
  arguments_assert(arguments, 3);
  ("What a record holds under a name, and then what that in turn holds under a");
  ("second name - nothing at all when the second name is not there.");
  ("A walk over parsed code hands back a record wrapped around each node, so every");
  ("question about the node itself is two reaches deep. The outer name is always");
  ("there and the inner one often is not, which is why the two halves are asked");
  ("differently. The thing in the middle is only ever passed through.");
  let held = property_get(object, property_name);
  let nested = property_get_or_null(held, nested_property_name);
  return nested;
}
