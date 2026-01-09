import { function_read } from "../../../love/public/src/function_read.mjs";
import { local_function_path_json } from "../../../love/public/src/local_function_path_json.mjs";
import { g_sermon_generate } from "../../../love/public/src/g_sermon_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function g_sermon_chapter_get(chapter_code) {
  marker("1");
  let fn = g_sermon_generate;
  let path = local_function_path_json(chapter_code, fn);
  let v = await function_read(f_name);
}
