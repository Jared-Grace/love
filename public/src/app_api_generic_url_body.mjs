import { app_api_generic_f_name_args } from "../../../love/public/src/app_api_generic_f_name_args.mjs";
export function app_api_generic_url_body(f_name, args) {
  let body = app_api_generic_f_name_args(f_name, args);
  const url = "/api";
  let v = {
    url,
    body,
  };
  return v;
}
