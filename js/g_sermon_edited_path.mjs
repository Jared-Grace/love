import { local_function_path_json } from "./local_function_path_json.mjs";
import { app_g_bible } from "./app_g_bible.mjs";
export function g_sermon_edited_path(chapter_code) {
  let path = local_function_path_json(chapter_code, app_g_bible);
  return path;
}
