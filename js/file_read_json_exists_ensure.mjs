import { file_read_json } from "./file_read_json.mjs";
import { file_exists_ensure_json } from "./file_exists_ensure_json.mjs";
export async function file_read_json_exists_ensure(file_path) {
  await file_exists_ensure_json(file_path);
  let data = await file_read_json(file_path);
  return data;
}
