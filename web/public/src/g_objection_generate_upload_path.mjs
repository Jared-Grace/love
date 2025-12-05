import { g_objection_generate_upload_path_generic } from "../../../love/public/src/g_objection_generate_upload_path_generic.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export function g_objection_generate_upload_path(chapter_code) {
  let f_name = fn_name("g_objection_generate_upload");
  let destination = g_objection_generate_upload_path_generic(
    chapter_code,
    f_name,
  );
  return destination;
}
