import { object_property_get } from "./object_property_get.mjs";
import { path_join } from "./path_join.mjs";
import { marker } from "./marker.mjs";
import { folder_current_join_code } from "./folder_current_join_code.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { folder_previous } from "./folder_previous.mjs";
export function function_name_to_path_import(import_, dictionary) {
  marker("1");
  let f_name_ext = function_name_to_base(import_);
  const from = folder_current_join_code(f_name_ext);
  return from;
  let value = object_property_get(object, property_name);
  let previous = folder_previous();
  let previous2 = folder_previous();
  let joined = path_join([previous, previous2]);
}
