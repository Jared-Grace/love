import { list_map_property } from "./list_map_property.mjs";
export function list_map_name(list) {
  let property_name = "name";
  let result = list_map_property(list, property_name);
  return result;
}
