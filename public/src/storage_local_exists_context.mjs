import { storage_local_exists } from "../../../love/public/src/storage_local_exists.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function storage_local_exists_context(context, key) {
  let app_fn = object_property_get(context, "app_fn");
  let exists = storage_local_exists(app_fn, key);
  return exists;
}
