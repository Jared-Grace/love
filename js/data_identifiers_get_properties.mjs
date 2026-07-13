import { data_identifiers_get } from "./data_identifiers_get.mjs";
import { properties_get } from "./properties_get.mjs";
export async function data_identifiers_get_properties() {
  let identifiers = await data_identifiers_get();
  let identifier_names = properties_get(identifiers);
  return identifier_names;
}
