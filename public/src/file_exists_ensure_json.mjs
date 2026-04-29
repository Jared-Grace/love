import { json_to } from "../../../love/public/src/json_to.mjs";
import { file_write } from "../../../love/public/src/file_write.mjs";
import { file_exists_not } from "../../../love/public/src/file_exists_not.mjs";
export async function file_exists_ensure_json(file_path) {
  let n = await file_exists_not(file_path);
  if (n) {
    let json = json_to(object);
    let r = await file_write(file_path, "");
  }
}
