import { g_sermon_edited_store_name } from "./g_sermon_edited_store_name.mjs";
import { storage_function_path_json } from "./storage_function_path_json.mjs";
export function g_sermon_edited_path(chapter_code) {
  let f_name = g_sermon_edited_store_name();
  let path = storage_function_path_json(chapter_code, f_name);
  return path;
}
