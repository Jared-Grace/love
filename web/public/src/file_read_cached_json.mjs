import { json_from } from "../../../love/public/src/json_from.mjs";
import { file_read_cached } from "../../../love/public/src/file_read_cached.mjs";
export async function file_read_cached_json(p) {
  await file_read_cached(p);
  let g = json_from(json);
  return g;
}
