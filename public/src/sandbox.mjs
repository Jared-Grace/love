import { json_equal } from "../../../love/public/src/json_equal.mjs";
import { function_delete } from "../../../love/public/src/function_delete.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { equal_not_curried_right } from "../../../karate_code/public/src/equal_not_curried_right.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function sandbox() {
  let s = equal_not_curried_right.name;
  let result = await data_identifiers_search(s);
  let properties = properties_get(result);
  let eq2 = json_equal(properties, [s]);
  if (eq2) {
    await function_delete(s);
  } else {
    log_keep(sandbox.name, "Used in multiple places. Not deleting.");
    return properties;
  }
}
