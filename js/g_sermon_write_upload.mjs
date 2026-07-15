import { g_sermon_write_upload_path } from "./g_sermon_write_upload_path.mjs";
import { g_sermon_write } from "./g_sermon_write.mjs";
import { g_generate_upload_generic } from "./g_generate_upload_generic.mjs";
export async function g_sermon_write_upload() {
  let path_get = g_sermon_write_upload_path;
  let fn = g_sermon_write;
  await g_generate_upload_generic(fn, path_get);
}
