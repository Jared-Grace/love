import { arguments_assert_each } from "./arguments_assert_each.mjs";
import { js_property_is } from "./js_property_is.mjs";
import { js_expression_node_is } from "./js_expression_node_is.mjs";
import { property_set } from "./property_set.mjs";
export function js_property_key_set(p, key) {
  "Give one entry of a record a different name, leaving what it holds alone. The twin of the verb next door that changes what an entry holds and leaves its name alone - between them they are the two halves an entry is made of, and only one of them had a name until now.";
  "The short way of writing an entry is undone at the same time, and it has to be. An entry written the short way is one word standing for both halves, so a name written into it is never printed and the file comes back byte for byte as it went in - a rename that reads as done, changes nothing, and has nothing to go red about.";
  arguments_assert_each(arguments, [js_property_is, js_expression_node_is]);
  property_set(p, "key", key);
  property_set(p, "shorthand", false);
}
