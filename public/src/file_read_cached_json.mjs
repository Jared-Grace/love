import { file_read } from "../../../love/public/src/file_read.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { file_read_cached } from "../../../love/public/src/file_read_cached.mjs";
export async function file_read_cached_json(file_path) {
  await file_read_cached(file_path);
  let contents = await file_read(file_path);
  let g = json_from(contents);
  return g;
}
