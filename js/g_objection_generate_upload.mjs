import { g_generate_upload_generic } from "./g_generate_upload_generic.mjs";
import { g_objection_generate_upload_path } from "./g_objection_generate_upload_path.mjs";
import { g_objection_generate } from "./g_objection_generate.mjs";
export async function g_objection_generate_upload() {
  let path_get = g_objection_generate_upload_path;
  let fn = g_objection_generate;
  await g_generate_upload_generic(fn, path_get);
}
