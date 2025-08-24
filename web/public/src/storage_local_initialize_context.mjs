import { marker } from "./marker.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
export function storage_local_initialize_context(context, key) {
  marker("1");
  let { app_fn } = context;
  let value = storage_local_get(app_fn, key);
  return value;
}
