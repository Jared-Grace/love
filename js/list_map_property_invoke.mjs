import { invoke_multiple } from "./invoke_multiple.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function list_map_property_invoke(list, property_name_lambda) {
  let mapped = list_map_property(list, property_name_lambda);
  invoke_multiple(mapped);
}
