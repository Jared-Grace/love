import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { local_function_path_json } from "../../../love/public/src/local_function_path_json.mjs";
import { g_sermon_generate } from "../../../love/public/src/g_sermon_generate.mjs";
export async function g_sermon_generate_chapter_passages_get(chapter_code) {
  let fn = g_sermon_generate;
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = object_property_get(chapter, "passages");
  return passages;
}
