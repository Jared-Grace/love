import { arguments_assert } from "./arguments_assert.mjs";
import { app_api_generic_url_body } from "./app_api_generic_url_body.mjs";
import { property_get } from "./property_get.mjs";
import { property_initialize } from "./property_initialize.mjs";
export async function app_api_generic(a) {
  arguments_assert(arguments, 1);
  let f_name = property_get(a, "f_name");
  let args = property_initialize(a, "args", []);
  let fn_http = property_get(a, "fn_http");
  var v = app_api_generic_url_body(f_name, args);
  let body = property_get(v, "body");
  let url = property_get(v, "url");
  let o = await fn_http(url, body);
  let result = property_get(o, "result");
  return result;
}
