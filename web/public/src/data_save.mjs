import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function data_save(a) {
  let { file_path, data } = a;
  await file_overwrite_json(file_path, data);
}
