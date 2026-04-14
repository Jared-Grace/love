import { json_from } from "../../../love/public/src/json_from.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { file_read_cached_initialize } from "../../../love/public/src/file_read_cached_initialize.mjs";
export async function file_read_cached_json(file_path) {
  await file_read_cached_initialize(file_path);
  let json = await file_read(file_path);
  let contents = json_from(json);
  return contents;
}
