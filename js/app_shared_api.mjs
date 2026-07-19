import { arguments_assert } from "./arguments_assert.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { property_get } from "./property_get.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { app_shared_api_generic } from "./app_shared_api_generic.mjs";
import { http_post_json } from "./http_post_json.mjs";
export async function app_shared_api(a) {
  arguments_assert(arguments, 1);
  let f_name = property_get(a, "f_name");
  text_is_assert_json(f_name, {
    hint: "the request should carry a text f_name to call — is f_name present on the request?",
    a,
  });
  let fn_http = http_post_json;
  property_set_exists_not(a, "fn_http", fn_http);
  let result = await app_shared_api_generic(a);
  return result;
}
