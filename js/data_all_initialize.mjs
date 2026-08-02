import { file_write_import } from "./file_write_import.mjs";
import { not } from "./not.mjs";
import { file_exists } from "./file_exists.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function data_all_initialize(file_path) {
  let exists = await file_exists(file_path);
  if (not(exists)) {
    let contents = json_format_to({});
    let write = await file_write_import();
    await write(file_path, contents);
  }
}
