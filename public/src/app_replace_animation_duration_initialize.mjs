import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
export function app_replace_animation_duration_initialize(
  context,
  value_initial,
) {
  let value5 = storage_local_initialize_context(
    context,
    "animation_duration",
    value_initial,
  );
  return value5;
}
