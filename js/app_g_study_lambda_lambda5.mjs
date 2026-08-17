import { arguments_assert } from "./arguments_assert.mjs";
import { g_sermon_generate_upload_path } from "./g_sermon_generate_upload_path.mjs";
import { firebase_storage_download_json_jg_decompress } from "./firebase_storage_download_json_jg_decompress.mjs";
export async function app_g_study_lambda_lambda5(chapter_code) {
  arguments_assert(arguments, 1);
  let destination = g_sermon_generate_upload_path(chapter_code);
  let o = await firebase_storage_download_json_jg_decompress(destination);
  return o;
}
