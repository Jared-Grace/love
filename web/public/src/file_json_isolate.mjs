import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { properties_delete_all } from "../../../love/public/src/properties_delete_all.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { file_json_transform } from "../../../love/public/src/file_json_transform.mjs";
export async function file_json_isolate(f_path, property_name) {
  async function lambda(data) {
    let value = object_property_get(data, property_name);
    properties_delete_all(data);
    object_property_set(data, property_name, value);
  }
  await file_json_transform(f_path, lambda);
}
