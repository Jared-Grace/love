import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_property_key_name_try(property) {
  ("The name one entry of a record is filed under, when it has a fixed one, and");
  ("nothing when it does not.");
  ("Two kinds of entry have no fixed name and answering for them would be a");
  ("guess: a name worked out while the program runs, and a spread of somebody");
  ("else's record. Both are answered as nothing so that whoever is comparing names");
  ("simply passes over them.");
  let property_is = js_node_type_is(property, "Property");
  if (property_is) {
    let computed = property_get(property, "computed");
    if (computed) {
      return null;
    }
    let key = property_get(property, "key");
    let named = js_identifier_is(key);
    if (named) {
      let name = property_get(key, "name");
      return name;
    }
    let written = js_literal_is(key);
    if (written) {
      let value = property_get(key, "value");
      return value;
    }
  }
  return null;
}
