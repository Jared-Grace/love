import { data_property_get } from "./data_property_get.mjs";
import { marker } from "./marker.mjs";
export async function data_identifiers_search(property_name) {
  marker("1");
  let v = await data_property_get(property_name);
  return v;
}
