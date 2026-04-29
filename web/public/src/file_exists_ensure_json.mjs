import { file_write_empty } from "../../../love/public/src/file_write_empty.mjs";
import { file_exists_not } from "../../../love/public/src/file_exists_not.mjs";
export async function file_exists_ensure_json(file_path) {
  let n = await file_exists_not(file_path);
  if (n) {
    let r = await file_write_empty(file_path);
  }
}
