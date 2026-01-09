import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { local_function_path_json } from "../../../love/public/src/local_function_path_json.mjs";
import { g_sermon_generate } from "../../../love/public/src/g_sermon_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function g_sermon_chapter_get(chapter_code) {
  marker("1");
  let fn = g_sermon_generate;
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  function lambda(v) {
    let verse_numbers = object_property_get(v, "verse_numbers");
    let text = object_property_get(v, "text");
    let sermon = object_property_get(v, "sermon");
  }
  let mapped = list_map(list, lambda);
}
