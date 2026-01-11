import { file_write } from "../../../love/public/src/file_write.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
export async function data_all_initialize(file_path) {
  let exists = await file_exists(file_path);
  if (not(exists)) {
    let contents = json_format_to({});
    await file_write(file_path, contents);
  }
}
