import { file_exists } from "./file_exists.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { g_sermon_generate } from "./g_sermon_generate.mjs";
// Does source (generated passages) exist for this chapter code? Used by auto-advance
// to know where a book ends — the last chapter with a g_sermon_generate/<code>.json.
export async function g_sermon_generate_chapter_exists(chapter_code) {
  let path = local_function_path_json(chapter_code, g_sermon_generate);
  return await file_exists(path);
}
