import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_api_generic_url_body } from "../../../love/public/src/app_api_generic_url_body.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_api_generic(f_name, args, fn) {
  marker("1");
  var { url, body } = app_api_generic_url_body(f_name, args);
  let o = await fn(url, body);
  let n = object_property_exists_not(object, property_name);
  log({
    o,
    url,
    body,
  });
  let result = object_property_get(o, "result");
  return result;
}
