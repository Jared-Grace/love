import { property_get_or_null } from "../../../love/public/src/property_get_or_null.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { app_replace_animation_duration_max } from "../../../love/public/src/app_replace_animation_duration_max.mjs";
export function app_replace_animation_duration_default() {
  let hash = html_hash_object_get();
  const property = "d";
  let d = property_get_or_null(hash, property);
  if (null_is(d)) {
    d = app_replace_animation_duration_max();
  }
  return d;
}
