import { firebase_storage_download_json_decompress_project_jg } from "./firebase_storage_download_json_decompress_project_jg.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate_upload_path } from "./app_ceb_bible_gloss_generate_upload_path.mjs";
export async function app_ceb_bible_gloss_generate_download(chapter_code) {
  "$plain chapter_code";
  arguments_assert(arguments, 1);
  let destination_get = app_ceb_bible_gloss_generate_upload_path;
  let fn = app_ceb_bible_gloss_generate_download;
  let value = await firebase_storage_download_json_decompress_project_jg(
    fn,
    destination_get,
    chapter_code,
  );
  return value;
}
