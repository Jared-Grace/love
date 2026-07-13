import { html_hash_object_property_set } from "./html_hash_object_property_set.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
export function app_supper_folders_chosen_set(folders) {
  let joined = list_join_plus(folders);
  html_hash_object_property_set("sl", joined);
}
