import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { global_firebase_storage_download_json_decompress } from "./global_firebase_storage_download_json_decompress.mjs";
import { g_sermon_write_upload_path } from "./g_sermon_write_upload_path.mjs";
export async function g_sermon_write_download(chapter_code) {
  let destination_get = g_sermon_write_upload_path;
  let fn = g_sermon_write_download;
  let project_url = firebase_storage_url_project_jg();
  let value = await global_firebase_storage_download_json_decompress(
    fn,
    destination_get,
    chapter_code,
    project_url,
  );
  return value;
}
