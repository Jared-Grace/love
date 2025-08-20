import { data_property_get } from "./data_property_get.mjs";
import { marker } from "./marker.mjs";
export async function data_identifiers_search() {
  marker("1");
  let v = await data_property_get("identifiers");
  return v;
}
