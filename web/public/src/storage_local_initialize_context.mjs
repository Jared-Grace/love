import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { storage_local_initialize } from "../../../love/public/src/storage_local_initialize.mjs";
export function storage_local_initialize_context(context, key, value_initial) {
  let app_fn = property_get(context, "app_fn");
  let value = storage_local_initialize(app_fn, key, value_initial);
  log({
    value_initial,
    value,
  });
  return value;
}
