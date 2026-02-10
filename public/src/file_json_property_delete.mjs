import { property_delete } from "../../../love/public/src/property_delete.mjs";
import { file_json_transform } from "../../../love/public/src/file_json_transform.mjs";
export async function file_json_property_delete(f_path, property_name) {
  async function lambda(data) {
    property_delete(data, property_name);
  }
  await file_json_transform(f_path, lambda);
}
