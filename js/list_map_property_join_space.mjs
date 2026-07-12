import { list_join_space } from "./list_join_space.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function list_map_property_join_space(group, property_name) {
  let mapped = list_map_property(group, property_name);
  let joined = list_join_space(mapped);
  return joined;
}
