import { property_get_or_null } from "../../../love/public/src/property_get_or_null.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
export function app_replace_animation_duration_get_hash() {
  let hash = html_hash_object_get();
  const property = "d";
  let d = property_get_or_null(hash, property);
  return d;
}
