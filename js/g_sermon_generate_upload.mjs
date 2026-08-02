import { g_sermon_edited_store_name } from "./g_sermon_edited_store_name.mjs";
import { error } from "./error.mjs";
import { g_sermon_generate_upload_path } from "./g_sermon_generate_upload_path.mjs";
import { g_sermon_generate } from "./g_sermon_generate.mjs";
import { g_generate_upload_generic } from "./g_generate_upload_generic.mjs";
import { text_combine } from "./text_combine.mjs";
export async function g_sermon_generate_upload() {
  let right = g_sermon_edited_store_name();
  let message = text_combine(
    "this maybe should not be ran because it would overwrite edits from ",
    right,
  );
  error(message);
  let path_get = g_sermon_generate_upload_path;
  let fn = g_sermon_generate;
  await g_generate_upload_generic(fn, path_get);
}
