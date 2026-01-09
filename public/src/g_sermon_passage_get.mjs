import { list_find } from "../../../love/public/src/list_find.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_join_newline_2 } from "../../../love/public/src/list_join_newline_2.mjs";
import { app_g_openai_split } from "../../../love/public/src/app_g_openai_split.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { local_function_path_json } from "../../../love/public/src/local_function_path_json.mjs";
import { g_sermon_generate } from "../../../love/public/src/g_sermon_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export async function g_sermon_passage_get(chapter_code, verse_number) {
  marker("1");
  let fn = g_sermon_generate;
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = object_property_get(chapter, "passages");
  function lambda(v) {
    let verse_numbers = object_property_get(v, "verse_numbers");
    let first = list_first(verse_numbers);
    let v2 = first === verse_number;
    return v2;
  }
  let v = list_find(passages, lambda);
  let verse_numbers = object_property_get(v, "verse_numbers");
  let result = list_join_comma_space(verse_numbers);
  let text = object_property_get(v, "text");
  let sermon = object_property_get(v, "sermon");
  let mapped = app_g_openai_split(sermon);
  let joined = list_join_newline_2(mapped);
  let joined2 = list_join_newline_2([result, text, joined]);
  return joined2;
}
