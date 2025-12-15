import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
import { invoke_cache_clear } from "../../../love/public/src/invoke_cache_clear.mjs";
export async function sandbox() {
  '[\"http_post_json\",[\"/api\",{\"f_name\":\"file_read\",\"args\":[\"../love/public/src/app_g_main.mjs\"]}]]';
  invoke_cache_clear(http_post_json, "test.mjs");
}
