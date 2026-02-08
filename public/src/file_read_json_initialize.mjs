import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { file_write_json_if_exists_not } from "../../../love/public/src/file_write_json_if_exists_not.mjs";
export async function file_read_json_initialize(initial, f_path) {
  await file_write_json_if_exists_not(f_path, initial);
  let data = await file_read_json(f_path);
  return data;
}
