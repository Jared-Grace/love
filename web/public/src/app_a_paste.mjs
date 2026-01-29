import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { storage_local_exists_context } from "../../../love/public/src/storage_local_exists_context.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_a_paste(choices, a) {
  marker("1");
  let context2 = object_property_get(a, "context");
  let exists = storage_local_exists_context(context, app_a_paste.name);
}
