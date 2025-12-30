import { global_alternate_set } from "../../../love/public/src/global_alternate_set.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function global_import_set(module_name, value, global) {
  marker("1");
  let unset = global_alternate_set(global);
  global_function_property_set(global_import_set, module_name, value);
  unset();
}
