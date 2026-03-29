import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export function list_map_property_invoke(sbs, property_name) {
  let mapped = list_map_property(sbs, property_name);
  invoke_multiple(mapped);
}
