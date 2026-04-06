import { function_delete } from "../../../love/public/src/function_delete.mjs";
import { json_equal } from "../../../love/public/src/json_equal.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function function_delete_unused(s) {
  let search = await data_identifiers_search(s);
  let properties = properties_get(search);
  let eq2 = json_equal(properties, [s]);
  let result = null;
  if (eq2) {
    result = await function_delete(s);
  } else {
    result = {
      message: "Used in multiple places. Not deleting.",
      properties,
    };
  }
  return result;
}
