import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_api_cache_global } from "../../../love/public/src/app_api_cache_global.mjs";
import { list_to } from "../../../love/public/src/list_to.mjs";
export async function app_api_cache_global_fn(fn, args) {
  marker("1");
  let function_name = fn.name;
  let args_list = list_to(args);
  let r = await app_api_cache_global(function_name, args_list);
  log(message);
  return r;
}
