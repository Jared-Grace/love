import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
export function storage_local_transform_context(
  context,
  key,
  value_initial,
  transform,
) {
  let value = storage_local_initialize_context(context, key, value_initial);
  let value_new = transform(value);
  storage_local_set_context(context, key, value_new);
}
