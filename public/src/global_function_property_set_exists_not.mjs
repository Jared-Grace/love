import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function global_function_property_set_exists_not(
  fn,
  property_name,
  value,
) {
  marker("1");
  return global_function_property_set(fn, property_name, value);
}
