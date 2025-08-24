import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { marker } from "./marker.mjs";
export function storage_local_initialize_context(context, key) {
  marker("1");
  let { app_fn } = context;
  let value = storage_local_initialize(app_fn, key);
  return value;
}
