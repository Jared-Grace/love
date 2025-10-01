import { storage_local_initialize } from "../../../love/public/src/storage_local_initialize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function storage_local_initialize_context(
  context,
  key,
  value_initial,
) {
  marker("1");
  let { app_fn } = context;
  let value = await storage_local_initialize(app_fn, key, value_initial);
  return value;
}
