import { object_property_get } from "./object_property_get.mjs";
import { path_join } from "./path_join.mjs";
import { marker } from "./marker.mjs";
import { folder_previous } from "./folder_previous.mjs";
export function function_name_to_path_import(import_, dictionary) {
  marker("1");
  let value = object_property_get(dictionary, import_);
  let previous = folder_previous();
  let previous2 = folder_previous();
  let joined = path_join([previous, previous2, value]);
  return joined;l
}
