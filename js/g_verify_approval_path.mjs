import { text_frozen } from "./text_frozen.mjs";
import { g_objection_generate_upload_path_generic } from "./g_objection_generate_upload_path_generic.mjs";
export function g_verify_approval_path(chapter_code) {
  "The folder follows the function-name convention but names no function - it is a storage";
  "namespace, and uploaded data already sits under it, so it is spelled as the string it is.";
  let folder = text_frozen("g_verify_approval");
  let destination = g_objection_generate_upload_path_generic(
    folder,
    chapter_code,
  );
  return destination;
}
