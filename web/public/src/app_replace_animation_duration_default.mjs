import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { app_replace_animation_duration_max } from "../../../love/public/src/app_replace_animation_duration_max.mjs";
export function app_replace_animation_duration_default() {
  let hash = html_hash_object_get();
  let r = app_replace_animation_duration_max();
  return r;
}
