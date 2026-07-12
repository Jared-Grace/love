import { function_delete } from "./function_delete.mjs";
import { json_equal } from "./json_equal.mjs";
import { properties_get } from "./properties_get.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
export async function function_delete_unused(s) {
  let search = await data_identifiers_search(s);
  let properties = properties_get(search);
  let eq = json_equal(properties, [s]);
  let result = null;
  if (eq) {
    result = await function_delete(s);
  } else {
    result = {
      message: "Used in multiple places. Not deleting.",
      properties,
    };
  }
  return result;
}
