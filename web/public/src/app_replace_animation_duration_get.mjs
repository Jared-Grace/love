import { app_replace_animation_duration_get_hash } from "../../../love/public/src/app_replace_animation_duration_get_hash.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { app_replace_animation_duration_default } from "../../../love/public/src/app_replace_animation_duration_default.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
export function app_replace_animation_duration_get(context) {
  let d = app_replace_animation_duration_get_hash();
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
