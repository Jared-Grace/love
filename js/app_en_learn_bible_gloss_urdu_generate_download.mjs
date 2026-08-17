import { app_en_learn_bible_gloss_urdu_generate_upload_path } from "./app_en_learn_bible_gloss_urdu_generate_upload_path.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_storage_download_json_decompress_project_jg } from "./firebase_storage_download_json_decompress_project_jg.mjs";
export async function app_en_learn_bible_gloss_urdu_generate_download(
  chapter_code,
) {
  "Fetch one chapter of English words explained in Urdu, so the reader's page can show them under the verse.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to fetch and nothing that runs.";
  arguments_assert(arguments, 1);
  let destination_get = app_en_learn_bible_gloss_urdu_generate_upload_path;
  let fn = app_en_learn_bible_gloss_urdu_generate_download;
  let value = await firebase_storage_download_json_decompress_project_jg(
    fn,
    destination_get,
    chapter_code,
  );
  return value;
}
