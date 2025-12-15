import { marker } from "../../../love/public/src/marker.mjs";
import { app_api_cache_global } from "../../../love/public/src/app_api_cache_global.mjs";
export async function app_api_cache_global_fn(fn, args) {
  marker("1");
  let function_name = fn.name;
  let r = await app_api_cache_global(function_name, args);
  return r;
}
