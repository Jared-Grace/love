import { global_import_set } from "../../../love/public/src/global_import_set.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
export function global_import_get(module_name) {
  let value = global_function_property_get(global_import_set, module_name);
  return value;
}
