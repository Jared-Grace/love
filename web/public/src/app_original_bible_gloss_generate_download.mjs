import { app_ceb_bible_gloss_generate_upload_path } from "../../../love/public/src/app_ceb_bible_gloss_generate_upload_path.mjs";
import { global_firebase_storage_download_json_decompress } from "../../../love/public/src/global_firebase_storage_download_json_decompress.mjs";
export async function app_original_bible_gloss_generate_download(chapter_code) {
  let destination_get = app_ceb_bible_gloss_generate_upload_path;
  let fn = app_original_bible_gloss_generate_download;
  let value = await global_firebase_storage_download_json_decompress(
    fn,
    destination_get,
    chapter_code,
  );
  return value;
}
