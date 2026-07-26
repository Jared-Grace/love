import { arguments_assert } from "./arguments_assert.mjs";
import { function_alias_keys } from "./function_alias_keys.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { data_paths_mentioning } from "./data_paths_mentioning.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { function_delete } from "./function_delete.mjs";
export async function function_delete_unused_among(s, names) {
  arguments_assert(arguments, 2);
  ("Deletes a fn only when nothing outside this group uses it, where use means code");
  ("that imports it, an alias key the human types, or a file in the data folder that");
  ("spells the name.");
  ("The group is what makes retiring a small subsystem possible at all. Its parts");
  ("import each other, so each one asked about on its own is answered honestly and");
  ("uselessly: something still calls me. Nothing in the group is ever deletable");
  ("while the rest of the group stands, and the whole of it is dead. Asking instead");
  ("whether anything OUTSIDE the group uses it is the same question for a group of");
  ("one, so nothing is loosened for the single case.");
  let alias_keys = await function_alias_keys(s);
  let aliased = list_empty_not_is(alias_keys);
  let paths_mentioning = await data_paths_mentioning(s);
  let named_in_data = list_empty_not_is(paths_mentioning);
  let search = await data_identifiers_search(s);
  let properties = properties_get(search);
  let outside = list_difference(properties, names);
  let free = list_empty_is(outside);
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
  } else if (free) {
    result = await function_delete(s);
  } else {
    result = {
      message: "Used in multiple places. Not deleting.",
      properties: outside,
    };
  }
  return result;
}
