import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { g_verify_suggest_set } from "./g_verify_suggest_set.mjs";
// Read the pending suggestion for a chapter (empty { key, text } if none) — the
// loop's read side, mirroring g_verify_approval_read.
export async function g_verify_suggest_read(chapter_code) {
  let path = local_function_path_json(chapter_code, g_verify_suggest_set);
  let exists = await file_exists(path);
  if (exists) {
    return await file_read_json(path);
  }
  return { key: "", text: "" };
}
