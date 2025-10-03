import { equal } from "../../../love/public/src/equal.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { data_path } from "./data_path.mjs";
export async function data_save(a) {
  let d_path = data_path();
  if (equal(file_path, d_path)) {
    return;
  }
  let { file_path, data } = a;
  await file_overwrite_json(file_path, data);
}
