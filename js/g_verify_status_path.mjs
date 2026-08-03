import { text_frozen } from "./text_frozen.mjs";
import { g_objection_generate_upload_path_generic } from "./g_objection_generate_upload_path_generic.mjs";
export function g_verify_status_path(chapter_code) {
  "The folder follows the function-name convention but names no function - it is a storage namespace, and uploaded data already sits under it, so the word it is spelled with is frozen.";
  "Read off the function holding it rather than spelled here, so the freeze list has something to watch. A word written straight into the line that uses it can be retyped by hand and nothing anywhere says what moved.";
  let folder = g_verify_status_namespace();
  let destination = g_objection_generate_upload_path_generic(
    folder,
    chapter_code,
  );
  return destination;
}
