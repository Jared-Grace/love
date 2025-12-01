import { each_async } from "../../../love/public/src/each_async.mjs";
import { file_json_transform } from "../../../love/public/src/file_json_transform.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { folder_read_paths_async } from "../../../love/public/src/folder_read_paths_async.mjs";
import { g_objection_generate } from "../../../love/public/src/g_objection_generate.mjs";
export async function g_objection_generate_migrate() {
  let fn = g_objection_generate;
  const path = "D:\\user\\storage\\function\\" + fn.name;
  let combineds = await folder_read_paths_async(path);
  await each_async(combineds, file_each);
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
