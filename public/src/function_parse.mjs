import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { file_js_parse } from "../../../love/public/src/file_js_parse.mjs";
export async function function_parse(f_name) {
  let v = await function_name_to_path_search(f_name);
  let f_path = property_get(v, "f_path");
  let parsed = await file_js_parse(f_path);
  return parsed;
}
