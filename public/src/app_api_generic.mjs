import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { app_api_generic_url_body } from "../../../love/public/src/app_api_generic_url_body.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_api_generic(a) {
  assert_arguments(arguments, 1);
  marker("1");
  let f_name = object_property_get(a, "f_name");
  let args = object_property_get(a, "args");
  var v = app_api_generic_url_body(f_name, args);
  let body = object_property_get(v, "body");
  let url = object_property_get(v, "url");
  let o = await fn_http(url, body);
  let result = object_property_get(o, "result");
  return result;
}
