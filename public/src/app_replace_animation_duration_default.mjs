import { property_get_or } from "../../../love/public/src/property_get_or.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { app_replace_animation_duration_max } from "../../../love/public/src/app_replace_animation_duration_max.mjs";
export function app_replace_animation_duration_default() {
  let hash = html_hash_object_get();
  const property = "d";
  let d = property_get_or(hash, property, null);
  let r = app_replace_animation_duration_max();
  return r;
}
