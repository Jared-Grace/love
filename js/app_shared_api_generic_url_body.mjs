import { server_url_get } from "./server_url_get.mjs";
import { app_shared_api_generic_f_name_args } from "./app_shared_api_generic_f_name_args.mjs";
export function app_shared_api_generic_url_body(f_name, args) {
  let body = app_shared_api_generic_f_name_args(f_name, args);
  let url = server_url_get();
  let v = {
    url,
    body,
  };
  return v;
}
