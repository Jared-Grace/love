import { function_name_to_path_search } from "./function_name_to_path_search.mjs";
import { property_get } from "./property_get.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
export async function function_parse(f_name) {
  let v = await function_name_to_path_search(f_name);
  let f_path = property_get(v, "f_path");
  let parsed = await file_js_parse(f_path);
  return parsed;
}
