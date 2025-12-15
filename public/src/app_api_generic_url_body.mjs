export function app_api_generic_url_body(f_name, args) {
  let body = {
    f_name: f_name,
    args: args,
  };
  const url = "/api";
  let v = {
    url,
    body,
  };
  return v;
}
