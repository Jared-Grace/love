import { gloss_upload_namespace_original_bible } from "./gloss_upload_namespace_original_bible.mjs";
import { firebase_chapter_upload_path } from "./firebase_chapter_upload_path.mjs";
export function app_original_bible_gloss_generate_upload_path(chapter_code) {
  "$plain chapter_code";
  let f_name = gloss_upload_namespace_original_bible();
  let destination = firebase_chapter_upload_path(f_name, chapter_code);
  return destination;
}
