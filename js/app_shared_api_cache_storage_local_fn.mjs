import { app_shared_api_cache_storage_local } from "./app_shared_api_cache_storage_local.mjs";
export async function app_shared_api_cache_storage_local_fn(fn, args) {
  let f_name = fn.name;
  let v = await app_shared_api_cache_storage_local(f_name, args);
  return v;
}
