import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
export async function file_temp_json_open(result) {
  async function lambda(temp_path) {
    let json = json_format_to(result);
    await file_overwrite(temp_path, json);
    await file_open(temp_path);
  }
  await file_temp(lambda);
}
