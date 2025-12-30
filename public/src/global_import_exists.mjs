import { global_function_property_exists } from "../../../love/public/src/global_function_property_exists.mjs";
import { global_import_set } from "../../../love/public/src/global_import_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function global_import_exists(module_name) {
  marker("1");
  let e = global_function_property_exists(global_import_set, module_name);
  return e;
}
