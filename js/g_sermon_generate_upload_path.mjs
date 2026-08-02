import { text_frozen } from "./text_frozen.mjs";
import { g_objection_generate_upload_path_generic } from "./g_objection_generate_upload_path_generic.mjs";
export function g_sermon_generate_upload_path(chapter_code) {
  let f_name = text_frozen("g_sermon_generate_upload");
  let destination = g_objection_generate_upload_path_generic(
    f_name,
    chapter_code,
  );
  return destination;
}
