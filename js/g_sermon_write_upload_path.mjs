import { text_frozen } from "./text_frozen.mjs";
import { g_objection_generate_upload_path_generic } from "./g_objection_generate_upload_path_generic.mjs";
export function g_sermon_write_upload_path(chapter_code) {
  let f_name = g_sermon_write_upload_namespace();
  let destination = g_objection_generate_upload_path_generic(
    f_name,
    chapter_code,
  );
  return destination;
}
