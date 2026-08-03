import { g_objection_generate_upload_namespace } from "./g_objection_generate_upload_namespace.mjs";
import { firebase_chapter_upload_path } from "./firebase_chapter_upload_path.mjs";
export function g_objection_generate_upload_path(chapter_code) {
  let f_name = g_objection_generate_upload_namespace();
  let destination = firebase_chapter_upload_path(f_name, chapter_code);
  return destination;
}
