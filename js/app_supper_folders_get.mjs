import { bible_folder_key } from "./bible_folder_key.mjs";
import { property_list_map_property } from "./property_list_map_property.mjs";
import { app_supper_folders_hash_key } from "./app_supper_folders_hash_key.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_split_plus } from "./text_split_plus.mjs";
import { null_is } from "./null_is.mjs";
export function app_supper_folders_get(context) {
  let hash = html_hash_object_get();
  let sl = property_get_or_null(hash, app_supper_folders_hash_key());
  let missing = null_is(sl);
  if (missing) {
    let folders_default = property_list_map_property(
      context,
      "supper_default_chosen",
      bible_folder_key(),
    );
    return folders_default;
  }
  let folders = text_split_plus(sl);
  return folders;
}
