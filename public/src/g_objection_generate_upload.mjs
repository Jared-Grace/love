import { marker } from "../../../love/public/src/marker.mjs";
import { g_objection_generate_migrate_generic } from "../../../love/public/src/g_objection_generate_migrate_generic.mjs";
import { file_json_transform } from "../../../love/public/src/file_json_transform.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function g_objection_generate_upload() {
  marker("1");
  await g_objection_generate_migrate_generic(file_each);
  async function file_each(file) {
    async function lambda(data) {
      let passages = object_property_get(data, "passages");
      function lambda3(item) {
        log({
          item,
        });
        const property_name_before = "sermon";
        object_property_delete(item, property_name_before);
      }
      each(passages, lambda3);
    }
    await file_json_transform(file, lambda);
  }
}
