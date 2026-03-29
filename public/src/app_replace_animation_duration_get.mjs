import { null_is } from "../../../love/public/src/null_is.mjs";
import { property_get_or_null } from "../../../love/public/src/property_get_or_null.mjs";
import { html_hash_object_get } from "../../../love/public/src/html_hash_object_get.mjs";
import { app_replace_animation_duration_default } from "../../../love/public/src/app_replace_animation_duration_default.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
export function app_replace_animation_duration_get(context) {
  let hash = html_hash_object_get();
  const property = "d";
  let d = property_get_or_null(hash, property);
  if (null_is(d)) {
    let value_initial = app_replace_animation_duration_default();
    d = storage_local_initialize_context(
      context,
      "animation_duration",
      value_initial,
    );
  }
  return d;
}
