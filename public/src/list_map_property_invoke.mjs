import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export function list_map_property_invoke(buttons, property_name_lambda) {
  let mapped = list_map_property(buttons, property_name_lambda);
  invoke_multiple(mapped);
}
