import { data_property_get } from "./data_property_get.mjs";
import { marker } from "./marker.mjs";
export async function data_identifiers_search(property_name) {
  marker("1");
  return await data_property_get(property_name);
}
