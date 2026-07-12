import { local_function_path } from "./local_function_path.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function local_function_path_json(chapter_code, fn) {
  let file_name = file_name_json(chapter_code);
  let path = local_function_path(fn, file_name);
  return path;
}
