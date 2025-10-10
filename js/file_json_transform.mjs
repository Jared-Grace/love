import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
export async function file_json_transform(f_path, lambda$data) {
  let data = await file_read_json(f_path);
  lambda$data(data);
  await file_overwrite_json(f_path, data);
}
