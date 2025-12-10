import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { http_post_json_cache } from "../../../love/public/src/http_post_json_cache.mjs";
export async function app_a_api_cache(f_name, args) {
  marker("1");
  let api_body = {
    f_name: f_name,
    args: args,
  };
  const url = "/api";
  let o = await http_post_json_cache(url, api_body);
  let result = object_property_get(o, "result");
  return result;
}
