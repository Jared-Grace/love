import { file_read_cached } from "../../../love/public/src/file_read_cached.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
export async function file_read_cached_json(file_path) {
  let json = await file_read_cached(file_path);
  let contents = json_from(json);
  return contents;
}
