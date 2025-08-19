import { file_js_parse } from "./file_js_parse.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { marker } from "./marker.mjs";
export async function data_file_update(f_path) {
  let f_name = function_path_to_name(f_path);
  let parsed = await file_js_parse(f_path);
  marker("1");
}
