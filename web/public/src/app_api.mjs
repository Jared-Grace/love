import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { string_is_assert } from "../../../love/public/src/string_is_assert.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_api_generic } from "../../../love/public/src/app_api_generic.mjs";
import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
export async function app_api(a) {
  let f_name = object_property_get(a, "f_name");
  string_is_assert(f_name);
  marker("1");
  let fn = http_post_json;
  object_property_set_exists_not(object, property_name, value);
  let result = await app_api_generic(f_name, args, fn);
  return result;
}
