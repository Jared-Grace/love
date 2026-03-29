import { app_replace_animation_duration_default } from "../../../love/public/src/app_replace_animation_duration_default.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
export function app_replace_animation_duration_get(context) {
  let value_initial = app_replace_animation_duration_default();
  let value5 = storage_local_initialize_context(
    context,
    "animation_duration",
    value_initial,
  );
  return value5;
}
