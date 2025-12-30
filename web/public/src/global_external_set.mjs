import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function global_external_set(module_name, value) {
  marker("1");
  global_function_property_set(global_external_set, module_name, value);
}
