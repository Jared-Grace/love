import { g_objection_generate_upload_path_generic } from "../../../love/public/src/g_objection_generate_upload_path_generic.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { app_ceb_bible_gloss_generate } from "../../../love/public/src/app_ceb_bible_gloss_generate.mjs";
import { g_generate_upload_generic } from "../../../love/public/src/g_generate_upload_generic.mjs";
export async function app_ceb_bible_gloss_generate_upload() {
  let path_get = function lambda() {
    let f_name = fn_name("app_ceb_bible_gloss_generate_upload");
    let destination = g_objection_generate_upload_path_generic(
      f_name,
      chapter_code,
    );
  };
  let fn = app_ceb_bible_gloss_generate;
  await g_generate_upload_generic(path_get, fn);
}
