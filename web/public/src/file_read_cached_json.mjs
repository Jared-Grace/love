import { file_read_cached_initialize } from "../../../love/public/src/file_read_cached_initialize.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
export async function file_read_cached_json(file_path) {
  await file_read_cached_initialize(file_path);
  let contents = await file_read_json(file_path);
  return contents;
}
