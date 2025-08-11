import { js_identifier_is } from "./js_identifier_is.mjs";
import { list_all } from "./list_all.mjs";
import { assert } from "./assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function js_identifiers_to_names(identifiers) {
  assert(list_all(identifiers, js_identifier_is));
  const names = list_map_property(identifiers, "name");
  return names;
}
