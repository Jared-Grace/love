import { marker } from "../../../love/public/src/marker.mjs";
import { g_objection_generate_migrate_generic } from "../../../love/public/src/g_objection_generate_migrate_generic.mjs";
export async function g_objection_generate_upload() {
  marker("1");
  await g_objection_generate_migrate_generic(file_each);
  async function file_each(file) {}
}
