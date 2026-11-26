import { g_sermon_write_upload_path } from "./g_sermon_write_upload_path.mjs";
import { firebase_storage_download_json_decompress_project_jg } from "./firebase_storage_download_json_decompress_project_jg.mjs";
export async function g_sermon_write_download(chapter_code) {
  "Fetches the sermons written for one chapter from storage, unpacked and ready to read.";
  let destination_get = g_sermon_write_upload_path;
  let fn = g_sermon_write_download;
  let value = await firebase_storage_download_json_decompress_project_jg(
    fn,
    destination_get,
    chapter_code,
  );
  return value;
}
