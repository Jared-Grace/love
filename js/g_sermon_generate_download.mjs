import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { global_firebase_storage_download_json_decompress } from "./global_firebase_storage_download_json_decompress.mjs";
import { g_sermon_generate_upload_path } from "./g_sermon_generate_upload_path.mjs";
export async function g_sermon_generate_download(chapter_code) {
  let destination_get = g_sermon_generate_upload_path;
  let fn = g_sermon_generate_download;
  let value = await firebase_storage_download_json_decompress_project_jg(
    fn,
    destination_get,
    chapter_code,
  );
  return value;
}
