import { text_frozen } from "./text_frozen.mjs";
import { g_objection_generate_upload_path_generic } from "./g_objection_generate_upload_path_generic.mjs";
export function app_original_bible_gloss_generate_upload_path(chapter_code) {
  "$plain chapter_code";
  let f_name = text_frozen("app_original_bible_gloss_generate_upload");
  let destination = g_objection_generate_upload_path_generic(
    f_name,
    chapter_code,
  );
  return destination;
}
