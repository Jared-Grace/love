import { js_code_string } from "./js_code_string.mjs";
import { property_get } from "./property_get.mjs";
import { path_join } from "./path_join.mjs";
import { folder_previous } from "./folder_previous.mjs";
export function function_name_to_path_import(import_, dictionary) {
  let value = property_get(dictionary, import_);
  let previous = folder_previous();
  let joined = path_join([previous, value]);
  let c = js_code_string(joined);
  return c;
}
