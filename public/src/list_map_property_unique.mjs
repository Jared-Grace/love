import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export function list_map_property_unique(fs, property_name) {
  let statements = list_map_property(fs, property_name);
  let unique = list_unique(list);
  return statements;
}
