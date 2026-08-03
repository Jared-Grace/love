import { g_arc_generate_upload_namespace } from "./g_arc_generate_upload_namespace.mjs";
import { firebase_chapter_upload_path } from "./firebase_chapter_upload_path.mjs";
export function g_arc_generate_upload_path(chapter_code) {
  "Where one chapter's arc lengths sit in storage.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN03 - a word chosen from the Bible's own book and chapter numbering, not a path and not anything that runs. It is joined into an address and handed back as text; nothing here reads or writes a file.";
  let f_name = g_arc_generate_upload_namespace();
  let destination = firebase_chapter_upload_path(f_name, chapter_code);
  return destination;
}
