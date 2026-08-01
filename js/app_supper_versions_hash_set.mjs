import { app_supper_folders_hash_key } from "./app_supper_folders_hash_key.mjs";
import { html_hash_object_property_set } from "./html_hash_object_property_set.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function app_supper_versions_hash_set(chosen) {
  let folders = list_map_property(chosen, "bible_folder");
  let joined = list_join_plus(folders);
  html_hash_object_property_set(app_supper_folders_hash_key(), joined);
}
