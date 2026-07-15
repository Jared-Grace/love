import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_download_json_decompress } from "./firebase_storage_download_json_decompress.mjs";
import { g_sermon_write_upload_path } from "./g_sermon_write_upload_path.mjs";
export async function g_sermon_write_download_fresh(chapter_code) {
  let project_url = firebase_storage_url_project_jg();
  let destination = g_sermon_write_upload_path(chapter_code);
  let value = await firebase_storage_download_json_decompress(
    project_url,
    destination,
  );
  return value;
}
