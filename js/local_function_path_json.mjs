import { storage_function_path_json } from "./storage_function_path_json.mjs";
export function local_function_path_json(chapter_code, fn) {
  "The one place a chapter code turns into a file name, so the shape of the code is asked about here and every caller gets the answer once.";
  let path = storage_function_path_json(chapter_code, fn.name);
  return path;
}
