import { global_firebase_storage_download_json_decompress } from "../../../love/public/src/global_firebase_storage_download_json_decompress.mjs";
import { g_sermon_generate_upload_path } from "../../../love/public/src/g_sermon_generate_upload_path.mjs";
export async function app_ceb_bible_gloss_generate_download(chapter_code) {
  let destination_get = g_sermon_generate_upload_path;
  let fn = app_ceb_bible_gloss_generate_download;
  let value = await global_firebase_storage_download_json_decompress(
    fn,
    destination_get,
    chapter_code,
  );
  return value;
}
