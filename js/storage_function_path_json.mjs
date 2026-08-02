import { ebible_chapter_code_assert } from "./ebible_chapter_code_assert.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
export function storage_function_path_json(chapter_code, f_name) {
  "The json file one chapter is kept in inside a named store.";
  "The name-taking twin of the one that asks by function, and the same reason: the store name is the address, so reading it should not drag in whatever function first wrote there.";
  ebible_chapter_code_assert(chapter_code);
  let file_name = file_name_json(chapter_code);
  let path = storage_function_path(f_name, file_name);
  return path;
}
