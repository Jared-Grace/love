import { local_function_path_json } from "../../../love/public/src/local_function_path_json.mjs";
import { path_name } from "../../../love/public/src/path_name.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { g_objection_generate } from "../../../love/public/src/g_objection_generate.mjs";
import { firebase_upload_object } from "../../../love/public/src/firebase_upload_object.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { g_objection_generate_migrate_generic } from "../../../love/public/src/g_objection_generate_migrate_generic.mjs";
import { path_base } from "./path_base.mjs";
export async function g_objection_generate_upload() {
  marker("1");
  await g_objection_generate_migrate_generic(file_each);
  async function file_each(file) {
    let fb = path_base(file);
    let chapter_code = path_name(fb);
    let fn = g_objection_generate;
    let path = local_function_path_json(chapter_code, fn);
    let joined = path_join([fn.name, fb]);
    let data = await file_read_json(path);
    await firebase_upload_object(data, joined);
  }
}
