import { g_verify_approval_namespace } from "./g_verify_approval_namespace.mjs";
import { firebase_chapter_upload_path } from "./firebase_chapter_upload_path.mjs";
export function g_verify_approval_path(chapter_code) {
  "The folder follows the function-name convention but names no function - it is a storage namespace, and uploaded data already sits under it, so the word it is spelled with is frozen.";
  "Read off the function holding it rather than spelled here, so the freeze list has something to watch.";
  let folder = g_verify_approval_namespace();
  let destination = firebase_chapter_upload_path(folder, chapter_code);
  return destination;
}
