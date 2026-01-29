import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { storage_local_remove } from "../../../love/public/src/storage_local_remove.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_remove_context(context, key) {
  marker("1");
  let app_fn = object_property_get(context, "app_fn");
  let v = storage_local_remove(app_fn, key);
  return v;
}
