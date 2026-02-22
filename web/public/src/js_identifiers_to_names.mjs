import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_all_assert } from "../../../love/public/src/list_all_assert.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
export function js_identifiers_to_names(identifiers) {
  list_all_assert(identifiers, js_identifier_is);
  let names = list_map(list, js_identifier_name);
  return names;
}
