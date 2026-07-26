import { ebible_chapter_code_assert } from "./ebible_chapter_code_assert.mjs";
import { local_function_path } from "./local_function_path.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function local_function_path_json(chapter_code, fn) {
  "The one place a chapter code turns into a file name, so the shape of the code is asked about here and every caller gets the answer once.";
  ebible_chapter_code_assert(chapter_code);
  let file_name = file_name_json(chapter_code);
  let path = local_function_path(fn, file_name);
  return path;
}
