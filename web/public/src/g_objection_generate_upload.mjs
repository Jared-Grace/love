import { local_function_path_json } from "../../../love/public/src/local_function_path_json.mjs";
import { function_param_new } from "../../../love/public/src/function_param_new.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { g_objection_generate } from "../../../love/public/src/g_objection_generate.mjs";
import { firebase_upload_object } from "../../../love/public/src/firebase_upload_object.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { g_objection_generate_migrate_generic } from "../../../love/public/src/g_objection_generate_migrate_generic.mjs";
import { path_base } from "./path_base.mjs";
export async function g_objection_generate_upload() {
  marker("1");
  let fn = g_objection_generate;
  await g_objection_generate_migrate_generic(file_each);
  async function file_each(file) {
    let fb = path_base(file);
    await function_param_new(param_name, default_value);
    let path = local_function_path_json(chapter_code, fn);
    let joined = path_join([fn.name, fb]);
    let data = await file_read_json(fb);
    await firebase_upload_object(data, joined);
  }
}
