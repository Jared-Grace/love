import { error } from "../../../love/public/src/error.mjs";
import { g_sermon_generate_upload_path } from "../../../love/public/src/g_sermon_generate_upload_path.mjs";
import { g_sermon_generate } from "../../../love/public/src/g_sermon_generate.mjs";
import { g_generate_upload_generic } from "../../../love/public/src/g_generate_upload_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_g_bible } from "./app_g_bible.mjs";
export async function g_sermon_generate_upload() {
  error(
    "this maybe should not be ran because it would overwrite edits from " +
      app_g_bible,
  );
  marker("1");
  let path_get = g_sermon_generate_upload_path;
  let fn = g_sermon_generate;
  await g_generate_upload_generic(path_get, fn);
}
