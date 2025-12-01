import { g_objection_generate } from "../../../love/public/src/g_objection_generate.mjs";
import { firebase_upload_object } from "../../../love/public/src/firebase_upload_object.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { g_objection_generate_migrate_generic } from "../../../love/public/src/g_objection_generate_migrate_generic.mjs";
export async function g_objection_generate_upload() {
  marker("1");
  let fn = g_objection_generate;
  await g_objection_generate_migrate_generic(file_each);
  async function file_each(file) {
    await firebase_upload_object(object, destination);
  }
}
