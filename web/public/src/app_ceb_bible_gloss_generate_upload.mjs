import { error } from "../../../love/public/src/error.mjs";
import { g_sermon_generate_upload_path } from "../../../love/public/src/g_sermon_generate_upload_path.mjs";
import { g_sermon_generate } from "../../../love/public/src/g_sermon_generate.mjs";
import { g_generate_upload_generic } from "../../../love/public/src/g_generate_upload_generic.mjs";
import { app_g_bible } from "./app_g_bible.mjs";
export async function app_ceb_bible_gloss_generate_upload() {
  error(
    "this maybe should not be ran because it would overwrite edits from " +
      app_g_bible,
  );
  let path_get = g_sermon_generate_upload_path;
  let fn = g_sermon_generate;
  await g_generate_upload_generic(path_get, fn);
}
