import { file_write_json } from "./file_write_json.mjs";
import { not } from "./not.mjs";
import { file_exists } from "./file_exists.mjs";
export async function file_write_json_if_exists_not(f_path, initial) {
  let exists = await file_exists(f_path);
  if (not(exists)) {
    await file_write_json(f_path, initial);
  }
}
