import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_all_assert } from "../../../love/public/src/list_all_assert.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export function js_identifiers_to_names(identifiers) {
  list_all_assert(identifiers, js_identifier_is);
  function lambda(item) {}
  let mapped = list_map(list, lambda);
  const names = list_map_property(identifiers, "name");
  return names;
}
