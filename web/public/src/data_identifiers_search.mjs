import { object_property_get } from "./object_property_get.mjs";
import { data_property_get } from "./data_property_get.mjs";
import { marker } from "./marker.mjs";
export async function data_identifiers_search(s) {
  marker("1");
  let identifiers = await data_property_get("identifiers");
  let value = object_property_get(identifiers, s);
  return value;
}
