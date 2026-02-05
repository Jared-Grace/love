import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { storage_local_exists_not } from "../../../love/public/src/storage_local_exists_not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_exists_not_context(context, key) {
  let app_fn = object_property_get(context, "app_fn");
  let exists = storage_local_exists_not(app_fn, key);
  return exists;
}
