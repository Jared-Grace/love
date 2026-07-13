import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_split_plus } from "./text_split_plus.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function app_supper_folders_get(context) {
  let hash = html_hash_object_get();
  let sl = property_get_or_null(hash, "sl");
  let missing = null_is(sl);
  if (missing) {
    let default_chosen = property_get(context, "supper_default_chosen");
    let folders = list_map_property(default_chosen, "bible_folder");
    return folders;
  }
  let folders = text_split_plus(sl);
  return folders;
}
