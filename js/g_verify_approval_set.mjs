import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function g_verify_approval_set(chapter_code, verse) {
  let path = local_function_path_json(chapter_code, g_verify_approval_set);
  await file_overwrite_uncached(path, json_format_to({ approved: verse }));
  return path;
}
