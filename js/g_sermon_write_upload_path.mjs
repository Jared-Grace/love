import { g_sermon_write_upload_namespace } from "./g_sermon_write_upload_namespace.mjs";
import { firebase_chapter_upload_path } from "./firebase_chapter_upload_path.mjs";
export function g_sermon_write_upload_path(chapter_code) {
  "$plain chapter_code";
  let f_name = g_sermon_write_upload_namespace();
  let destination = firebase_chapter_upload_path(f_name, chapter_code);
  return destination;
}
