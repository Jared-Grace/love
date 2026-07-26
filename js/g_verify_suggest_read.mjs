import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { g_verify_suggest_set } from "./g_verify_suggest_set.mjs";
export async function g_verify_suggest_read(chapter_code) {
  "$plain chapter_code";
  let path = local_function_path_json(chapter_code, g_verify_suggest_set);
  let exists = await file_exists(path);
  if (exists) {
    let r = await file_read_json(path);
    return r;
  }
  let r2 = {
    key: "",
    text: "",
  };
  return r2;
}
