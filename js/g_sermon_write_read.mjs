import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { g_sermon_write } from "./g_sermon_write.mjs";
export async function g_sermon_write_read(chapter_code) {
  let path = local_function_path_json(chapter_code, g_sermon_write);
  let exists = await file_exists(path);
  if (exists) {
    return await file_read_json(path);
  }
  return { chapter_code, passages: [] };
}
