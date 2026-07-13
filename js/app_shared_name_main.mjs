import { app_shared_name_main_full } from "./app_shared_name_main_full.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
import { property_exists } from "./property_exists.mjs";
export async function app_shared_name_main(a) {
  let combined = app_shared_name_main_full(a);
  let identifiers = await data_identifiers_get();
  let main_exists = property_exists(identifiers, combined);
  if (main_exists) {
    return combined;
  }
  return app_shared_name_prefixed(a);
}
