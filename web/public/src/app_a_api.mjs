import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function app_a_api(f_name, args) {
  let fn = http_post_json;
  marker("1");
  let api_body = {
    f_name: f_name,
    args: args,
  };
  const url = "/api";
  let o = await fn(url, api_body);
  let result = object_property_get(o, "result");
  return result;
}
