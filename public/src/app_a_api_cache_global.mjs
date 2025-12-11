import { http_post_json_cache_global } from "../../../love/public/src/http_post_json_cache_global.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_api_cache_global(f_name, args) {
  marker("1");
  let result = await http_post_json_cache_global("api", {
    f_name,
    args,
  });
  return result;
}
