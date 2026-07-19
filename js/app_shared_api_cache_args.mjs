import { server_url_api } from "./server_url_api.mjs";
import { app_shared_api_generic_f_name_args } from "./app_shared_api_generic_f_name_args.mjs";
export function app_shared_api_cache_args(fn, f_args) {
  let a = app_shared_api_generic_f_name_args(fn.name, f_args);
  let a2 = server_url_api();
  let args_cache = [a2, a];
  return args_cache;
}
