import { g_generate_upload_generic } from "../../../love/public/src/g_generate_upload_generic.mjs";
import { g_objection_generate_upload_path } from "../../../love/public/src/g_objection_generate_upload_path.mjs";
import { g_objection_generate } from "../../../love/public/src/g_objection_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function g_sermon_generate_upload() {
  marker("1");
  let path_get = g_objection_generate_upload_path;
  let fn = g_objection_generate;
  await g_generate_upload_generic(path_get, fn);
}
