import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_object_expression_properties } from "./js_object_expression_properties.mjs";
export function property_js_object_expression_properties(
  object,
  property_name,
) {
  arguments_assert(arguments, 2);
  ("The key-and-value pairs written out inside the curly-brace object held under");
  ("this name.");
  ("A visit carries the tree it stopped at under one name, and a matched rule");
  ("carries the piece it matched under another. Both are then asked the same");
  ("question - what is written inside these braces - and the tree itself is never");
  ("wanted on its own, only as the thing standing between the name and the pairs.");
  ("Duplicate-key checking, finding an object by the words in it, and the two");
  ("rule-set migrations all start here.");
  let node = property_get(object, property_name);
  let properties = js_object_expression_properties(node);
  return properties;
}
