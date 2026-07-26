import { function_delete } from "./function_delete.mjs";
import { json_equal } from "./json_equal.mjs";
import { properties_get } from "./properties_get.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
export async function function_delete_unused(s) {
  "Deletes a fn only when nothing uses it, where use means either code that imports it or an alias key the human types";
  "A command the human runs from the keyboard has no importer, so importers alone would call it dead and delete it";
  let alias_keys = await function_alias_keys(s);
  let aliased = list_empty_not_is(alias_keys);
  let search = await data_identifiers_search(s);
  let properties = properties_get(search);
  let eq = json_equal(properties, [s]);
  let result = null;
  if (aliased) {
    result = {
      message: "The human reaches this by an alias, so it is in use. Not deleting.",
      alias_keys,
    };
  } else if (eq) {
    result = await function_delete(s);
  } else {
    result = {
      message: "Used in multiple places. Not deleting.",
      properties,
    };
  }
  return result;
}
