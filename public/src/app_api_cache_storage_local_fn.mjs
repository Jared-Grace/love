import { app_api_cache_storage_local } from "../../../love/public/src/app_api_cache_storage_local.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_api_cache_storage_local_fn(fn, args) {
  marker("1");
  let f_name = fn.name;
  let v = await app_api_cache_storage_local(f_name, args);
  return v;
}
