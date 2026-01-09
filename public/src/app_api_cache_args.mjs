import { server_url_api } from "../../../love/public/src/server_url_api.mjs";
import { app_api_generic_f_name_args } from "../../../love/public/src/app_api_generic_f_name_args.mjs";
export function app_api_cache_args(fn, f_args) {
  let a = app_api_generic_f_name_args(fn.name, f_args);
  let a2 = server_url_api();
  const args_cache = [a2, a];
  return args_cache;
}
