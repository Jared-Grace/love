import { storage_local_transform_context } from "../../../love/public/src/storage_local_transform_context.mjs";
export function storage_local_transform_empty_context(
  context,
  key,
  lambda$value,
) {
  storage_local_transform_context(context, key, {}, lambda$value);
}
