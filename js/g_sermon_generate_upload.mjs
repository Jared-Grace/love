import { error } from "../../love/js/error.mjs";
import { g_sermon_generate_upload_path } from "../../love/js/g_sermon_generate_upload_path.mjs";
import { g_sermon_generate } from "../../love/js/g_sermon_generate.mjs";
import { g_generate_upload_generic } from "../../love/js/g_generate_upload_generic.mjs";
import { app_g_bible } from "../../love/js/app_g_bible.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
export async function g_sermon_generate_upload() {
  error(
    text_combine(
      "this maybe should not be ran because it would overwrite edits from ",
      app_g_bible,
    ),
  );
  let path_get = g_sermon_generate_upload_path;
  let fn = g_sermon_generate;
  await g_generate_upload_generic(fn, path_get);
}
