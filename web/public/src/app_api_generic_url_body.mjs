import { server_api_url } from "../../../love/public/src/server_api_url.mjs";
import { app_api_generic_f_name_args } from "../../../love/public/src/app_api_generic_f_name_args.mjs";
export function app_api_generic_url_body(f_name, args) {
  let body = app_api_generic_f_name_args(f_name, args);
  const url = server_api_url();
  let v = {
    url,
    body,
  };
  return v;
}
