import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { property_set_exists_not } from "../../../love/public/src/property_set_exists_not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { app_api_generic } from "../../../love/public/src/app_api_generic.mjs";
import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
export async function app_api(a) {
  assert_arguments(arguments, 1);
  let f_name = property_get(a, "f_name");
  text_is_assert(f_name);
  let fn_http = http_post_json;
  property_set_exists_not(a, "fn_http", fn_http);
  let result = await app_api_generic(a);
  return result;
}
