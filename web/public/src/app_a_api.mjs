import { app_a_api_generic } from "../../../love/public/src/app_a_api_generic.mjs";
import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
export async function app_a_api(f_name, args) {
  let fn = http_post_json;
  let result = await app_a_api_generic(f_name, args, fn);
  return result;
}
