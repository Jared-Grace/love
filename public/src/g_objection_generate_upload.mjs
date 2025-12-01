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
    let joined = path_join([fb, fn.name]);
    let data = await file_read_json(file_path);
    await firebase_upload_object(file, joined);
  }
}
