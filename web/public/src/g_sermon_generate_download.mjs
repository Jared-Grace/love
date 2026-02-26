import { error } from "../../../love/public/src/error.mjs";
import { global_firebase_storage_download_json_decompress } from "../../../love/public/src/global_firebase_storage_download_json_decompress.mjs";
import { g_sermon_generate_upload_path } from "../../../love/public/src/g_sermon_generate_upload_path.mjs";
export async function g_sermon_generate_download(chapter_code) {
  let destination_get = g_sermon_generate_upload_path;
  let fn = g_sermon_generate_download;
  let project_url = error();
  let value = await global_firebase_storage_download_json_decompress(
    fn,
    destination_get,
    chapter_code,
    project_url,
  );
  return value;
}
