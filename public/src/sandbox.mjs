import { invoke_cache_clear } from "../../../love/public/src/invoke_cache_clear.mjs";
import { file_read } from "./file_read.mjs";
export async function sandbox() {
  '[\"http_post_json\",[\"/api\",{\"f_name\":\"file_read\",\"args\":[\"../love/public/src/app_g_main.mjs\"]}]]';
  invoke_cache_clear(file_read, "test.mjs");
}
