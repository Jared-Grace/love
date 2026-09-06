import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function js_object_property_key_name_or_null(one) {
  arguments_assert(arguments, 1);
  ("The word a property of an object literal writes as its key, or nothing at all when it is spread in from elsewhere or worked out as the code runs.");
  ("A key is asked for both ways it can be written: plainly it sits on a name, in quotes it sits as a word, and whichever is absent simply answers with nothing. Anything that answers null is a property whose key is not knowable by reading, and no sweep may treat it as a key it recognised.");
  let plain = js_node_type_is(one, "Property");
  if (not(plain)) {
    return null;
  }
  let computed = property_get(one, "computed");
  if (computed) {
    return null;
  }
  let key_node = property_get(one, "key");
  let name = property_get_or(key_node, "name", null);
  if (name) {
    return name;
  }
  let spelled = property_get_or(key_node, "value", null);
  return spelled;
}
