import { g_objection_generate_property } from "../../../love/public/src/g_objection_generate_property.mjs";
import { property_rename } from "../../../love/public/src/property_rename.mjs";
import { file_json_transform } from "../../../love/public/src/file_json_transform.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function g_objection_generate_migrate() {
  await g_objection_generate_migrate_generic(file_each);
  async function file_each(file) {
    async function lambda(data) {
      let passages = property_get(data, "passages");
      function lambda3(item) {
        const property_name_before = "objection";
        let property_name_after = g_objection_generate_property();
        property_rename(item, property_name_before, property_name_after);
      }
      each(passages, lambda3);
    }
    await file_json_transform(file, lambda);
  }
}
