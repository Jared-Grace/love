import { http_post_json_cache } from "../../../love/public/src/http_post_json_cache.mjs";
export async function app_a_api(function_name, args) {
  let api_body = {
    function_name: function_name,
    args: args,
  };
  const url = "/api";
  let o = await http_post_json_cache(url, api_body);
  return o;
}
