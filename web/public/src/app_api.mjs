import { string_is_assert } from "../../../love/public/src/string_is_assert.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_api_generic } from "../../../love/public/src/app_api_generic.mjs";
import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
export async function app_api(f_name, args) {
  string_is_assert(f_name);
  marker("1");
  let fn = http_post_json;
  let result = await app_api_generic(f_name, args, fn);
  return result;
}
