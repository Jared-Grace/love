import { global_function_property_exists } from "../../../love/public/src/global_function_property_exists.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function global_function_property_exists_not(fn, property_name) {
  marker("1");
  return global_function_property_exists(fn, property_name);
}
