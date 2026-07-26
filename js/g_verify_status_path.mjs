import { g_objection_generate_upload_path_generic } from "./g_objection_generate_upload_path_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export function g_verify_status_path(chapter_code) {
  "The folder follows the function-name convention but names no function - it is a storage";
  "namespace, and uploaded data already sits under it, so it is spelled as the string it is.";
  let folder = "g_verify_status";
  let destination = g_objection_generate_upload_path_generic(folder, chapter_code);
  return destination;
}
