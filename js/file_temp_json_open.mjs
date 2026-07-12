import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { file_temp } from "./file_temp.mjs";
import { file_open } from "./file_open.mjs";
export async function file_temp_json_open(result) {
  async function lambda(temp_path) {
    await file_overwrite_json(temp_path, result);
    await file_open(temp_path);
  }
  await file_temp(lambda);
}
