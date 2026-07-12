import { global_alternate_set } from "./global_alternate_set.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export function global_import_set(module_name, value, global_alternate) {
  let unset = global_alternate_set(global_alternate);
  global_function_property_set(global_import_set, module_name, value);
  unset();
}
