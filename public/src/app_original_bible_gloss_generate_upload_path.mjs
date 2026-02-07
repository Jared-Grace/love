import { g_objection_generate_upload_path_generic } from "../../../love/public/src/g_objection_generate_upload_path_generic.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export function app_original_bible_gloss_generate_upload_path(chapter_code) {
  let f_name = fn_name("app_ceb_bible_gloss_generate_upload");
  let destination = g_objection_generate_upload_path_generic(
    f_name,
    chapter_code,
  );
  return destination;
}
