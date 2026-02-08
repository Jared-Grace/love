import { file_write_json } from "../../../love/public/src/file_write_json.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
export async function file_write_json_if_exists_not(f_path, initial) {
  let exists = await file_exists(f_path);
  if (not(exists)) {
    await file_write_json(f_path, initial);
  }
}
