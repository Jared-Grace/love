import { g_verify_status_namespace } from "./g_verify_status_namespace.mjs";
import { firebase_chapter_upload_path } from "./firebase_chapter_upload_path.mjs";
export function g_verify_status_path(chapter_code) {
  "The folder follows the function-name convention but names no function - it is a storage namespace, and uploaded data already sits under it, so the word it is spelled with is frozen.";
  "Read off the function holding it rather than spelled here, so the freeze list has something to watch. A word written straight into the line that uses it can be retyped by hand and nothing anywhere says what moved.";
  let folder = g_verify_status_namespace();
  let destination = firebase_chapter_upload_path(folder, chapter_code);
  return destination;
}
