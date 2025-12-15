import { server_api_url } from "../../../love/public/src/server_api_url.mjs";
import { app_api_generic_f_name_args } from "../../../love/public/src/app_api_generic_f_name_args.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
import { invoke_cache_clear } from "../../../love/public/src/invoke_cache_clear.mjs";
export async function sandbox() {
  let fn = file_read;
  const args = ["../love/public/src/app_g_main.mjs"];
  let a = app_api_generic_f_name_args(file_read.name, args);
  let a2 = server_api_url();
  invoke_cache_clear(http_post_json, [a2, a]);
}
