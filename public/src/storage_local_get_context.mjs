import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
export async function storage_local_get_context(context, key) {
  let { app_fn } = context;
  let value = await storage_local_get(app_fn, key);
  return value;
}
