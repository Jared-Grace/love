import { storage_local_get } from "./storage_local_get.mjs";
export function storage_local_initialize_context(context, key) {
  let { app_fn } = context;
  let value = storage_local_get(app_fn, key);
  return value;
}
