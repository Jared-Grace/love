import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_map_property_exists(list, property_name) {
  marker("1");
  return list_map_property(list, property_name);
}
