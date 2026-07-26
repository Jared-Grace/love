import { data_paths_mentioning } from "./data_paths_mentioning.mjs";
import { function_alias_keys } from "./function_alias_keys.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { function_delete } from "./function_delete.mjs";
import { json_equal } from "./json_equal.mjs";
import { properties_get } from "./properties_get.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
export async function function_delete_unused(s) {
  "Deletes a fn only when nothing uses it, where use means code that imports it, an alias key the human types, or a file in the data folder that spells the name";
  "A command the human runs from the keyboard has no importer, so importers alone would call it dead and delete it";
  "The data folder is not code either, so a sweep over the functions never sees the example corpus or a gate baseline naming this - and deleting it would leave that spelling pointing at nothing";
  let alias_keys = await function_alias_keys(s);
  let aliased = list_empty_not_is(alias_keys);
  let paths_mentioning = await data_paths_mentioning(s);
  let named_in_data = list_empty_not_is(paths_mentioning);
  let search = await data_identifiers_search(s);
  let properties = properties_get(search);
  let eq = json_equal(properties, [s]);
  let result = null;
  if (aliased) {
    result = {
      message:
        "The human reaches this by an alias, so it is in use. Not deleting.",
      alias_keys,
    };
  } else if (named_in_data) {
    result = {
      message:
        "The data folder still spells this name, so something there is counting on it. Would you like to clear these first? Not deleting.",
      paths_mentioning,
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
