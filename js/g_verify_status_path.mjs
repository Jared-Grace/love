import { g_objection_generate_upload_path_generic } from "./g_objection_generate_upload_path_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export function g_verify_status_path(chapter_code) {
  let f_name = fn_name("g_verify_status");
  let destination = g_objection_generate_upload_path_generic(f_name, chapter_code);
  return destination;
}
