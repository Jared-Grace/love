import { ebible_chapter_code_assert } from "./ebible_chapter_code_assert.mjs";
import { local_function_path } from "./local_function_path.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function local_function_path_json(chapter_code, fn) {
  "The one place a chapter code turns into a file name, so the shape of the code is asked about here and every caller gets the answer once.";
  let path = storage_function_path_json(chapter_code, fn.name);
  return path;
}
