import { property_get } from "./property_get.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function data_save(a) {
  let data = property_get(a, "data");
  let file_path = property_get(a, "file_path");
  await file_overwrite_json(file_path, data);
}
