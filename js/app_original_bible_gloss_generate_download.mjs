import { firebase_storage_download_json_decompress_project_jg } from "./firebase_storage_download_json_decompress_project_jg.mjs";
import { app_original_bible_gloss_generate_upload_path } from "./app_original_bible_gloss_generate_upload_path.mjs";
export async function app_original_bible_gloss_generate_download(chapter_code) {
  "$plain chapter_code";
  let destination_get = app_original_bible_gloss_generate_upload_path;
  let fn = app_original_bible_gloss_generate_download;
  let value = await firebase_storage_download_json_decompress_project_jg(
    fn,
    destination_get,
    chapter_code,
  );
  return value;
}
