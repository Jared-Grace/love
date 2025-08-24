import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { marker } from "./marker.mjs";
export function storage_local_initialize_context(context, key, value_initial) {
  marker("1");
  let { app_fn } = context;
  let value = storage_local_initialize(app_fn, key, value_initial);
  return value;
}
