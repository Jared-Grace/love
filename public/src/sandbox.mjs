import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { folder_read_paths_async } from "../../../love/public/src/folder_read_paths_async.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { file_json_transform } from "../../../love/public/src/file_json_transform.mjs";
export async function sandbox() {
  const path = "D:\\user\\storage\\function\\g_objection_generate";
  let combineds = await folder_read_paths_async(path);
  async function lambda2(file) {
    log({
      file,
    });
    return;
    async function lambda(data) {
      function lambda3(item) {
        const property_name_before = "sermon";
        let value = object_property_get(item, property_name_before);
        object_property_set_exists_not(object, property_name, value2);
      }
      each(list, lambda3);
    }
    await file_json_transform(file, lambda);
  }
  await each_async(combineds, lambda2);
}
