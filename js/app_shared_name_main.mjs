import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
import { property_exists } from "./property_exists.mjs";
export async function app_shared_name_main(a) {
  let a_name = app_shared_name_prefixed(a);
  let combined = function_name_combine_multiple([a_name, "main"]);
  let identifiers = await data_identifiers_get();
  let main_exists = property_exists(identifiers, combined);
  if (main_exists) {
    return combined;
  }
  return a_name;
}
