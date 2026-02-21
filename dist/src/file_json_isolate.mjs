import { property_set } from "../../../love/public/src/property_set.mjs";
import { properties_delete_all } from "../../../love/public/src/properties_delete_all.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { file_json_transform } from "../../../love/public/src/file_json_transform.mjs";
export async function file_json_isolate(f_path, property_name) {
  async function lambda(data) {
    let value = property_get(data, property_name);
    properties_delete_all(data);
    property_set(data, property_name, value);
  }
  await file_json_transform(f_path, lambda);
}
