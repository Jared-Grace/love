import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_split_plus } from "./text_split_plus.mjs";
import { null_is } from "./null_is.mjs";
export function app_supper_folders_chosen(default_folders) {
  let hash = html_hash_object_get();
  let l = property_get_or_null(hash, "sl");
  let missing = null_is(l);
  if (missing) {
    return default_folders;
  }
  let folders = text_split_plus(l);
  return folders;
}
