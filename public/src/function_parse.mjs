import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { file_js_parse } from "../../../love/public/src/file_js_parse.mjs";
export async function function_parse(f_name) {
  marker("1");
  let v = await function_name_to_path_search(f_name);
  let f_path = object_property_get(v, "f_path");
  let parsed = await file_js_parse(f_path);
  return parsed;
}
