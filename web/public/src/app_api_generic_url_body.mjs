import { list_to } from "./list_to.mjs";
export function app_api_generic_url_body(f_name, args) {
  let body = {
    f_name: f_name,
    args: list_to(args),
  };
  const url = "/api";
  let v = {
    url,
    body,
  };
  return v;
}
